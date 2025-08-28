

import React, { lazy, Suspense, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CheatSheet, ChatMessage, ChartConfig } from '../types';
import { UserIcon, BotIcon } from './IconComponents';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

const LoadingHighlighter: React.FC = () => (
    <div className="w-full bg-slate-100 dark:bg-slate-800 p-4 h-full min-h-[160px] flex flex-col justify-center">
        <div className="w-3/4 h-4 bg-slate-300 dark:bg-slate-700 rounded animate-pulse mb-3"></div>
        <div className="w-1/2 h-4 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
    </div>
);

const CodeSnippet: React.FC<{ language: string; code: string; isFullscreen?: boolean; theme: 'light' | 'dark' }> = memo(({ language, code, isFullscreen, theme }) => (
    <Suspense fallback={<LoadingHighlighter />}>
        <div className={`overflow-auto w-full ${isFullscreen ? 'text-base' : 'text-sm'}`}>
            <SyntaxHighlighter 
                language={language} 
                style={theme === 'dark' ? atomOneDark : atomOneLight} 
                customStyle={{ 
                    margin: 0, 
                    padding: '1rem', 
                    backgroundColor: theme === 'dark' ? '#0f172a' : '#fafafa'
                }} 
                wrapLongLines={true}>
                {code}
            </SyntaxHighlighter>
        </div>
    </Suspense>
));

const MarkdownSnippet: React.FC<{ content: string, isFullscreen?: boolean, theme: 'light' | 'dark' }> = memo(({ content, isFullscreen, theme }) => {
    return (
        <Suspense fallback={<LoadingHighlighter />}>
            <div className={`w-full overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900/50 ${isFullscreen ? 'text-base' : 'text-sm'}`}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code(props) {
                            const {children, className, node, ...rest} = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    // FIX: Removed {...rest} which passed incompatible DOM props from react-markdown, causing a type error.
                                    style={theme === 'dark' ? atomOneDark : atomOneLight}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{ backgroundColor: theme === 'dark' ? '#0f172a' : '#fafafa' }}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code {...rest} className="text-amber-600 dark:text-amber-400 bg-slate-200/60 dark:bg-slate-700/80 px-1.5 py-0.5 rounded-md font-mono text-sm before:content-[''] after:content-['']">
                                    {children}
                                </code>
                            )
                        },
                        p: ({node, ...props}) => <p className="my-2" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside my-2 space-y-1" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-inside my-2 space-y-1" {...props} />,
                        li: ({node, ...props}) => <li className="my-1" {...props} />,
                        a: ({node, ...props}) => <a className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-slate-800 dark:text-slate-200" {...props} />,
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold my-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold my-3" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold my-2" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </Suspense>
    );
});

const ChatSnippet: React.FC<{ messages: ChatMessage[] }> = memo(({ messages }) => (
    <div className="p-4 space-y-4 overflow-y-auto bg-slate-100 dark:bg-slate-900 w-full">
        {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.author === 'user' ? 'justify-end' : ''}`}>
                {msg.author === 'model' && <BotIcon className="h-6 w-6 text-sky-500 dark:text-sky-400 flex-shrink-0" />}
                <div className={`p-3 rounded-lg max-w-[85%] ${msg.author === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white'}`}>
                    <p className="text-sm">{msg.content}</p>
                </div>
                {msg.author === 'user' && <UserIcon className="h-6 w-6 text-slate-500 dark:text-slate-400 flex-shrink-0" />}
            </div>
        ))}
    </div>
));

const ChartSnippet: React.FC<{ config: ChartConfig }> = memo(({ config }) => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const tickColor = isDarkMode ? '#9ca3af' : '#64748b';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';
    const tooltipBg = isDarkMode ? '#1f2937' : '#ffffff';
    const tooltipBorder = isDarkMode ? '#374151' : '#e5e7eb';
    const legendColor = isDarkMode ? '#d1d5db' : '#374151';

    return (
        <div className="p-4 bg-slate-50 dark:bg-slate-800 h-full w-full min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
                {config.type === 'area' ? (
                    <AreaChart data={config.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis dataKey={config.xAxisDataKey} tick={{ fill: tickColor, fontSize: 12 }} />
                        <YAxis tick={{ fill: tickColor, fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}` }} />
                        <Legend wrapperStyle={{ color: legendColor }} />
                        {config.series.map(s => <Area key={s.dataKey} type="monotone" dataKey={s.dataKey} stroke={s.color} fill={s.color} fillOpacity={0.6} />)}
                    </AreaChart>
                ) : (
                    <BarChart data={config.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis dataKey={config.xAxisDataKey} tick={{ fill: tickColor, fontSize: 12 }} />
                        <YAxis tick={{ fill: tickColor, fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}` }} />
                        <Legend wrapperStyle={{ color: legendColor }} />
                        {config.series.map(s => <Bar key={s.dataKey} dataKey={s.dataKey} fill={s.color} />)}
                    </BarChart>
                )}
            </ResponsiveContainer>
        </div>
    );
});

const SvgSnippet: React.FC<{ svgString: string }> = memo(({ svgString }) => (
    <div className="p-4 bg-slate-800 flex items-center justify-center h-full w-full" dangerouslySetInnerHTML={{ __html: svgString }} />
));

interface SnippetRendererProps {
    sheet: CheatSheet;
    isFullscreen?: boolean;
    theme: 'light' | 'dark';
}

const SnippetRenderer: React.FC<SnippetRendererProps> = ({ sheet, isFullscreen = false, theme }) => {
    const { type, snippet, subCategory } = sheet;

    switch (type) {
        case 'chat':
            return <ChatSnippet messages={snippet as ChatMessage[]} />;
        case 'chart':
            return <ChartSnippet config={snippet as ChartConfig} />;
        case 'svg':
            return <SvgSnippet svgString={snippet as string} />;
        case 'code':
        default:
            // Render as markdown for 'text' subcategory
            if (subCategory === 'text') {
                return <MarkdownSnippet content={snippet as string} isFullscreen={isFullscreen} theme={theme} />;
            }
            return <CodeSnippet language={subCategory} code={snippet as string} isFullscreen={isFullscreen} theme={theme} />;
    }
};

export default memo(SnippetRenderer);