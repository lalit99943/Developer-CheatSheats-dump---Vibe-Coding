
import React, { useEffect, useMemo, useState, memo } from 'react';
import { CheatSheet, ChartConfig, ChatMessage, Priority } from '../types';
import { XIcon, ClipboardIcon, CheckIcon } from './IconComponents';
import FormattedDescription from './FormattedDescription';
import SnippetRenderer from './SnippetRenderer';

interface FullscreenModalProps {
    sheet: CheatSheet | null;
    onClose: () => void;
    theme: 'light' | 'dark';
}

const PriorityIndicator: React.FC<{ priority?: Priority }> = memo(({ priority }) => {
    if (!priority) return null;

    const priorityClasses = {
        High: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
        Medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
        Low: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300'
    };
    
    return (
        <div 
            className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityClasses[priority]}`} 
            title={`Priority: ${priority}`}
        >
             {priority}
        </div>
    );
});


const FullscreenModal: React.FC<FullscreenModalProps> = ({ sheet, onClose, theme }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!sheet) return;
        
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [sheet, onClose]);

    const snippetText = useMemo(() => {
        if (!sheet) return '';
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
    }, [sheet]);


    const handleCopy = () => {
        navigator.clipboard.writeText(snippetText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!sheet) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-slate-900/80 dark:bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
            <div 
                className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-5xl h-full max-h-[90vh] flex flex-col border border-slate-300 dark:border-slate-700"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Header */}
                <header className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center shrink-0">
                     <div className="flex items-center gap-4">
                        <h2 id="modal-title" className="text-xl font-bold text-sky-600 dark:text-sky-400">{sheet.title}</h2>
                        <PriorityIndicator priority={sheet.priority} />
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleCopy}
                            className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                            aria-label="Copy snippet"
                            title="Copy"
                        >
                            {copied ? <CheckIcon className="h-5 w-5 text-green-500 dark:text-green-400" /> : <ClipboardIcon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                            aria-label="Close modal"
                            title="Close (Esc)"
                        >
                            <XIcon className="h-5 w-5" />
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        <FormattedDescription text={sheet.description} />
                    </div>
                    <div className="relative bg-slate-50 dark:bg-slate-900/50 flex-1 flex flex-col">
                        <SnippetRenderer sheet={sheet} isFullscreen={true} theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(FullscreenModal);
