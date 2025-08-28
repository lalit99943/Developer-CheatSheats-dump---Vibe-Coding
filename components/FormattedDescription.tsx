import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const FormattedDescription: React.FC<{ text: string }> = ({ text }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                p: ({node, ...props}) => <p className="leading-relaxed my-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-slate-800 dark:text-slate-200" {...props} />,
                code: ({node, ...props}) => <code className="text-amber-600 dark:text-amber-400 bg-slate-200/60 dark:bg-slate-700/80 px-1.5 py-0.5 rounded-md text-sm mx-1 font-mono" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside my-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside my-2" {...props} />,
                li: ({node, ...props}) => <li className="my-1" {...props} />,
                a: ({node, ...props}) => <a className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
            }}
        >
            {text}
        </ReactMarkdown>
    );
};

export default memo(FormattedDescription);