
import React, { memo } from 'react';

interface TagFilterProps {
    tags: string[];
    selectedTag: string;
    setSelectedTag: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTag, setSelectedTag }) => {
    if (tags.length <= 1) { // Only shows if there are tags besides "All"
        return null;
    }

    return (
        <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-400 mb-3">Top Tags</h4>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                            selectedTag === tag
                                ? 'bg-sky-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default memo(TagFilter);
