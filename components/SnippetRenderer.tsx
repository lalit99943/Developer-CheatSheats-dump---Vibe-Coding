import React, { lazy, Suspense, memo } from 'react';
import { CheatSheet, ChatMessage, ChartConfig } from '../types';
import { UserIcon, BotIcon } from './IconComponents';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

const LoadingHighlighter: React.FC = () => (
    <div className="w-full bg-slate-800 p-4 h-full min-h-[160px] flex flex-col justify-center">
        <div className="w-3/4 h-4 bg-slate-700 rounded animate-pulse mb-3"></div>
        <div className="w-1/2 h-4 bg-slate-700 rounded animate-pulse"></div>
    </div>
);

const CodeSnippet: React.FC<{ language: string; code: string; isFullscreen?: boolean }> = memo(({ language, code, isFullscreen }) => (
    <Suspense fallback={<LoadingHighlighter />}>
        <div className={`overflow-auto w-full ${isFullscreen ? 'text-base' : 'text-sm'}`}>
            <SyntaxHighlighter language={language} style={atomOneDark} customStyle={{ margin: 0, padding: '1rem', backgroundColor: '#0f172a' }} wrapLongLines={true}>
                {code}
            </SyntaxHighlighter>
        </div>
    </Suspense>
));

const ChatSnippet: React.FC<{ messages: ChatMessage[] }> = memo(({ messages }) => (
    <div className="p-4 space-y-4 overflow-y-auto bg-slate-900 w-full">
        {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.author === 'user' ? 'justify-end' : ''}`}>
                {msg.author === 'model' && <BotIcon className="h-6 w-6 text-sky-400 flex-shrink-0" />}
                <div className={`p-3 rounded-lg max-w-[85%] ${msg.author === 'user' ? 'bg-sky-800' : 'bg-slate-700'}`}>
                    <p className="text-sm">{msg.content}</p>
                </div>
                {msg.author === 'user' && <UserIcon className="h-6 w-6 text-slate-400 flex-shrink-0" />}
            </div>
        ))}
    </div>
));

const ChartSnippet: React.FC<{ config: ChartConfig }> = memo(({ config }) => (
    <div className="p-4 bg-slate-800 h-full w-full min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
            {config.type === 'area' ? (
                <AreaChart data={config.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey={config.xAxisDataKey} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }} />
                    <Legend wrapperStyle={{ color: '#d1d5db' }} />
                    {config.series.map(s => <Area key={s.dataKey} type="monotone" dataKey={s.dataKey} stroke={s.color} fill={s.color} fillOpacity={0.6} />)}
                </AreaChart>
            ) : (
                <BarChart data={config.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey={config.xAxisDataKey} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }} />
                    <Legend wrapperStyle={{ color: '#d1d5db' }} />
                    {config.series.map(s => <Bar key={s.dataKey} dataKey={s.dataKey} fill={s.color} />)}
                </BarChart>
            )}
        </ResponsiveContainer>
    </div>
));

const SvgSnippet: React.FC<{ svgString: string }> = memo(({ svgString }) => (
    <div className="p-4 bg-slate-800 flex items-center justify-center h-full w-full" dangerouslySetInnerHTML={{ __html: svgString }} />
));

interface SnippetRendererProps {
    sheet: CheatSheet;
    isFullscreen?: boolean;
}

const SnippetRenderer: React.FC<SnippetRendererProps> = ({ sheet, isFullscreen = false }) => {
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
            return <CodeSnippet language={subCategory} code={snippet as string} isFullscreen={isFullscreen} />;
    }
};

export default memo(SnippetRenderer);