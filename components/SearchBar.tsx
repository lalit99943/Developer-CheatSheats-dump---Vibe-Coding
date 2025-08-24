
import React, { memo } from 'react';
import { SearchIcon, XIcon } from './IconComponents';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-slate-400" />
            </div>
            <input
                type="text"
                placeholder="Search by command, language, tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full bg-slate-800 border border-slate-700 rounded-md py-2 pl-10 pr-10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
            {searchQuery && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                        onClick={() => setSearchQuery('')}
                        className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        aria-label="Clear search"
                    >
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default memo(SearchBar);