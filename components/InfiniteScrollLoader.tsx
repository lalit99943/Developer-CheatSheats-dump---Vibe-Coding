
import React, { useEffect, useRef, memo } from 'react';
import { LoaderIcon } from './IconComponents';

interface InfiniteScrollLoaderProps {
    onVisible: () => void;
    hasMore: boolean;
}

const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> = ({ onVisible, hasMore }) => {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                if (firstEntry.isIntersecting) {
                    onVisible();
                }
            },
            { rootMargin: '400px' } // Load content before it's strictly in the viewport
        );

        const currentLoader = loaderRef.current;
        if (currentLoader) {
            observer.observe(currentLoader);
        }

        return () => {
            if (currentLoader) {
                observer.unobserve(currentLoader);
            }
        };
    }, [onVisible, hasMore]);

    if (!hasMore) {
        return null;
    }

    return (
        <div ref={loaderRef} className="flex justify-center items-center p-8" aria-live="polite">
            <LoaderIcon className="h-8 w-8 animate-spin text-sky-500" />
            <span className="ml-3 text-slate-500 dark:text-slate-400">Loading more cheatsheets...</span>
        </div>
    );
};

export default memo(InfiniteScrollLoader);