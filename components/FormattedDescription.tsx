import React, { memo } from 'react';

const FormattedDescription: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
        <p className="leading-relaxed">
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    const content = part.slice(2, -2);
                    const [label, ...rest] = content.split(':');
                    const value = rest.join(':').trim();

                    if (!value) {
                        return (
                            <code key={index} className="text-amber-400 bg-slate-700/80 px-1.5 py-0.5 rounded-md text-sm mx-1 font-mono">
                                {label.trim()}
                            </code>
                        );
                    }

                    return (
                        <React.Fragment key={index}>
                            <br className="my-1"/>
                            <span className="font-semibold text-slate-300">{label}:</span>
                            <code className="text-amber-400 bg-slate-700/80 px-1.5 py-0.5 rounded-md text-sm mx-1 font-mono">
                                {value}
                            </code>
                        </React.Fragment>
                    );
                }
                return part;
            })}
        </p>
    );
};

export default memo(FormattedDescription);
