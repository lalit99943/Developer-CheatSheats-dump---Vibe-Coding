import React, { lazy, Suspense, memo, useState, useEffect, useRef } from 'react';
import { CheatSheet } from '../types';
import { ClipboardIcon, CheckIcon } from './IconComponents';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

const LoadingHighlighter: React.FC = () => (
    <div className="bg-slate-800 p-4 h-40">
        <div className="w-3/4 h-4 bg-slate-700 rounded animate-pulse mb-3"></div>
        <div className="w-1/2 h-4 bg-slate-700 rounded animate-pulse"></div>
    </div>
);

const CheatSheetCard: React.FC<{ sheet: CheatSheet }> = ({ sheet }) => {
    const [copied, setCopied] = React.useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px',
            }
        );

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    // Defensively handle cases where the snippet is not a string (e.g., from a malformed API response).
    // If it's an object, stringify it to show the raw data instead of "[object]".
    const snippetText = typeof sheet.snippet === 'string' ? sheet.snippet : JSON.stringify(sheet.snippet, null, 2);
    const language = typeof sheet.snippet === 'string' 
        ? (sheet.subCategory.toLowerCase() === 'shell' ? 'bash' : sheet.subCategory.toLowerCase()) 
        : 'json';


    const handleCopy = () => {
        navigator.clipboard.writeText(snippetText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div ref={cardRef} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col border border-slate-700">
            <div className="p-4 border-b border-slate-700">
                <h3 className="text-lg font-bold text-sky-400">{sheet.title}</h3>
                <div className="flex items-center text-xs text-slate-400 mt-1">
                    <span className="font-semibold bg-slate-700 px-2 py-0.5 rounded-full">{sheet.category}</span>
                    <span className="mx-2">&gt;</span>
                    <span className="font-medium">{sheet.subCategory}</span>
                </div>
            </div>
            <div className="p-4 text-sm text-slate-300 flex-grow">
                <p>{sheet.description}</p>
            </div>
            <div className="relative bg-slate-900/50 group min-h-[160px]">
                {isVisible ? (
                    <>
                        <button
                            onClick={handleCopy}
                            className="absolute top-2 right-2 p-1.5 bg-slate-700 rounded-md text-slate-400 hover:text-white hover:bg-slate-600 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10"
                            aria-label="Copy code"
                        >
                            {copied ? <CheckIcon className="h-5 w-5 text-green-400" /> : <ClipboardIcon className="h-5 w-5" />}
                        </button>
                        <Suspense fallback={<LoadingHighlighter />}>
                            <SyntaxHighlighter
                                language={language}
                                style={atomOneDark}
                                customStyle={{ margin: 0, borderRadius: '0', padding: '16px', backgroundColor: 'transparent' }}
                                wrapLongLines={true}
                            >
                                {snippetText}
                            </SyntaxHighlighter>
                        </Suspense>
                    </>
                ) : (
                    <LoadingHighlighter />
                )}
            </div>
            <div className="p-4 bg-slate-800 border-t border-slate-700">
                <div className="flex flex-wrap gap-2">
                    {sheet.tags.map(tag => (
                        <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-mono px-2 py-1 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(CheatSheetCard);