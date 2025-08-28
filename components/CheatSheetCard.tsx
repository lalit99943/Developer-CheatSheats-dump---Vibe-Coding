
import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import { CheatSheet, ChatMessage, ChartConfig, Priority } from '../types';
import { ClipboardIcon, CheckIcon, ExpandIcon } from './IconComponents';
import SnippetRenderer from './SnippetRenderer';
import FormattedDescription from './FormattedDescription';

const PriorityIndicator: React.FC<{ priority?: Priority }> = memo(({ priority }) => {
    if (!priority) return null;

    const priorityClasses = {
        High: 'bg-red-500',
        Medium: 'bg-amber-500',
        Low: 'bg-sky-500'
    };
    
    return (
        <span className={`w-3 h-3 rounded-full ${priorityClasses[priority]}`} title={`Priority: ${priority}`}></span>
    );
});

const CheatSheetCard: React.FC<{ sheet: CheatSheet, onExpand: (sheet: CheatSheet) => void, theme: 'light' | 'dark' }> = ({ sheet, onExpand, theme }) => {
    const [copied, setCopied] = useState(false);
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

    const snippetText = useMemo(() => {
        if (sheet.type === 'chat' && Array.isArray(sheet.snippet)) {
            return (sheet.snippet as ChatMessage[]).map(m => `${m.author.toUpperCase()}: ${m.content}`).join('\n\n');
        }
        if (sheet.type === 'chart' && typeof sheet.snippet === 'object' && !Array.isArray(sheet.snippet) && 'data' in sheet.snippet) {
            return JSON.stringify((sheet.snippet as ChartConfig).data, null, 2);
        }
        if (sheet.type === 'svg' && typeof sheet.snippet === 'string') {
            return sheet.snippet;
        }
        if (typeof sheet.snippet === 'string') {
            return sheet.snippet;
        }
        return JSON.stringify(sheet.snippet, null, 2);
    }, [sheet.snippet, sheet.type]);


    const handleCopy = () => {
        navigator.clipboard.writeText(snippetText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div ref={cardRef} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-sky-600 dark:text-sky-400">{sheet.title}</h3>
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
                            <span className="font-semibold bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">{sheet.category}</span>
                            <span className="mx-2">&gt;</span>
                            <span className="font-medium">{sheet.subCategory}</span>
                        </div>
                    </div>
                    <PriorityIndicator priority={sheet.priority} />
                </div>
            </div>
            <div className="p-4 text-sm text-slate-600 dark:text-slate-300 flex-grow">
                 <FormattedDescription text={sheet.description} />
            </div>
            <div className="relative bg-slate-50 dark:bg-slate-900/50 group min-h-[160px] flex">
                {isVisible ? (
                     <>
                        <div className="absolute top-2 right-2 flex items-center gap-2 z-10 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                            <button
                                onClick={handleCopy}
                                className="p-1.5 bg-slate-200 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600 focus:opacity-100"
                                aria-label="Copy snippet"
                                title="Copy"
                            >
                                {copied ? <CheckIcon className="h-5 w-5 text-green-500 dark:text-green-400" /> : <ClipboardIcon className="h-5 w-5" />}
                            </button>
                             <button
                                onClick={() => onExpand(sheet)}
                                className="p-1.5 bg-slate-200 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600 focus:opacity-100"
                                aria-label="View fullscreen"
                                title="Fullscreen"
                            >
                                <ExpandIcon className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="w-full flex-1 flex">
                           <SnippetRenderer sheet={sheet} theme={theme} />
                        </div>
                    </>
                ) : (
                    <div className="w-full bg-slate-100 dark:bg-slate-800 p-4 h-full min-h-[160px] flex flex-col justify-center">
                        <div className="w-3/4 h-4 bg-slate-300 dark:bg-slate-700 rounded animate-pulse mb-3"></div>
                        <div className="w-1/2 h-4 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
                    </div>
                )}
            </div>
            <div className="p-4 bg-slate-100/50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-2">
                    {sheet.tags.map(tag => (
                        <span key={tag} className="bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs font-mono px-2 py-1 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(CheatSheetCard);
