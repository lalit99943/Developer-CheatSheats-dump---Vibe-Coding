
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { CheatSheet } from './types';
import { db } from './services/db';
import { fetchCheatSheetsFromWeb } from './services/geminiService';
import { initialData } from './data/initialData';
import Sidebar from './components/Sidebar';
import CheatSheetCard from './components/CheatSheetCard';
import SearchBar from './components/SearchBar';
import { MenuIcon, LoaderIcon, BrainCircuitIcon } from './components/IconComponents';
import InfiniteScrollLoader from './components/InfiniteScrollLoader';
import FullscreenModal from './components/FullscreenModal';
import TagFilter from './components/TagFilter';

// Custom hook to debounce a value
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const INITIAL_LOAD_COUNT = 20;
const LOAD_INCREMENT = 10;

const App: React.FC = () => {
    const [allCheatSheets, setAllCheatSheets] = useState<CheatSheet[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetchingWeb, setIsFetchingWeb] = useState(false);
    const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
    const [fullscreenSheet, setFullscreenSheet] = useState<CheatSheet | null>(null);
    const mainContentRef = useRef<HTMLDivElement>(null);

    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    const initializeDB = useCallback(async () => {
        setIsLoading(true);
        await db.init();
        const sheets = await db.getAllCheatSheets();
        if (sheets.length === 0) {
            await db.bulkAddCheatSheets(initialData);
            const allSheets = await db.getAllCheatSheets();
            setAllCheatSheets(allSheets);
        } else {
            setAllCheatSheets(sheets);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        initializeDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Reset visible count and scroll to top when filters change
    useEffect(() => {
        setVisibleCount(INITIAL_LOAD_COUNT);
        setSelectedTag('All');
        if (mainContentRef.current) {
            mainContentRef.current.scrollTop = 0;
        }
    }, [selectedCategory, debouncedSearchQuery]);

    const categories = useMemo(() => {
        const uniqueCategories = ['All', ...Array.from(new Set(allCheatSheets.map(cs => cs.category)))];
        return uniqueCategories.sort((a,b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
    }, [allCheatSheets]);

    const filteredCheatSheets = useMemo(() => {
        const lowerCaseQuery = debouncedSearchQuery.toLowerCase();

        return allCheatSheets.filter(sheet => {
            const inCategory = selectedCategory === 'All' || sheet.category === selectedCategory;
            if (!inCategory) return false;

            if (lowerCaseQuery === '') return true;
            
            // Defensively handle non-string snippets during search to prevent crashes
            const snippetText = typeof sheet.snippet === 'string' ? sheet.snippet : JSON.stringify(sheet.snippet);

            return (
                sheet.title.toLowerCase().includes(lowerCaseQuery) ||
                snippetText.toLowerCase().includes(lowerCaseQuery) ||
                sheet.description.toLowerCase().includes(lowerCaseQuery) ||
                sheet.subCategory.toLowerCase().includes(lowerCaseQuery) ||
                sheet.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
            );
        });
    }, [debouncedSearchQuery, selectedCategory, allCheatSheets]);

    const topTags = useMemo(() => {
        if (filteredCheatSheets.length === 0) return [];
        const tagCounts: { [key: string]: number } = {};
        filteredCheatSheets.forEach(sheet => {
            sheet.tags.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        });
        const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
        return ['All', ...sortedTags.slice(0, 15)];
    }, [filteredCheatSheets]);

    const tagFilteredSheets = useMemo(() => {
        if (selectedTag === 'All') {
            return filteredCheatSheets;
        }
        return filteredCheatSheets.filter(sheet => sheet.tags.includes(selectedTag));
    }, [filteredCheatSheets, selectedTag]);
    
    const itemsToRender = useMemo(() => {
        return tagFilteredSheets.slice(0, visibleCount);
    }, [tagFilteredSheets, visibleCount]);
    
    const loadMore = useCallback(() => {
        if (visibleCount < tagFilteredSheets.length) {
            setVisibleCount(prevCount => prevCount + LOAD_INCREMENT);
        }
    }, [visibleCount, tagFilteredSheets.length]);

    const handleWebSearch = async () => {
        if (!searchQuery) return;
        setIsFetchingWeb(true);
        try {
            const newSheets = await fetchCheatSheetsFromWeb(searchQuery);
            if (newSheets && newSheets.length > 0) {
                await db.bulkAddCheatSheets(newSheets);
                const allSheets = await db.getAllCheatSheets();
                setAllCheatSheets(allSheets);
            } else {
                 // Maybe show a toast notification here in a real app
                console.log("Web search didn't return any new cheat sheets.");
            }
        } catch (error) {
            console.error("Failed to fetch from web:", error);
        } finally {
            setIsFetchingWeb(false);
        }
    };
    
    return (
        <div className="flex h-screen bg-slate-900 text-slate-200 font-sans">
            <Sidebar 
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <main className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
                <header className="p-4 md:p-6 bg-slate-900 border-b border-slate-700/50 shrink-0 z-10">
                    <div className="flex items-center">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 mr-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </div>
                </header>

                <div ref={mainContentRef} className="flex-1 overflow-y-auto p-4 md:p-6">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-400">
                           <LoaderIcon className="h-12 w-12 animate-spin text-sky-500" />
                           <p className="mt-4 text-lg">Initializing cheatsheats...</p>
                        </div>
                    ) : filteredCheatSheets.length > 0 ? (
                        <>
                            <TagFilter 
                                tags={topTags} 
                                selectedTag={selectedTag} 
                                setSelectedTag={setSelectedTag} 
                            />
                            {tagFilteredSheets.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-6">
                                        {itemsToRender.map(sheet => (
                                            <CheatSheetCard key={sheet.id} sheet={sheet} onExpand={setFullscreenSheet} />
                                        ))}
                                    </div>
                                    <InfiniteScrollLoader 
                                        onVisible={loadMore} 
                                        hasMore={itemsToRender.length < tagFilteredSheets.length}
                                    />
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 rounded-lg border-2 border-dashed border-slate-700 p-8">
                                    <h2 className="text-2xl font-semibold text-slate-300">No Matches for Tag</h2>
                                    <p className="mt-2 max-w-md">No cheatsheets found with the tag "#{selectedTag}" in this category.</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 rounded-lg border-2 border-dashed border-slate-700 p-8">
                            <h2 className="text-2xl font-semibold text-slate-300">No Cheat Sheets Found</h2>
                            <p className="mt-2 max-w-md">Your search for "{searchQuery}" in "{selectedCategory}" didn't return any results from your local database.</p>
                             <button
                                onClick={handleWebSearch}
                                disabled={isFetchingWeb}
                                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900 disabled:bg-sky-800 disabled:cursor-not-allowed transition-colors"
                            >
                                {isFetchingWeb ? (
                                    <>
                                        <LoaderIcon className="animate-spin -ml-1 mr-3 h-5 w-5" />
                                        Searching the web...
                                    </>
                                ) : (
                                    <>
                                        <BrainCircuitIcon className="-ml-1 mr-3 h-5 w-5" />
                                        Ask Gemini for help
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <FullscreenModal sheet={fullscreenSheet} onClose={() => setFullscreenSheet(null)} />
        </div>
    );
};

export default App;
