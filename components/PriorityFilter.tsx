import React, { memo } from 'react';
import { Priority } from '../types';

const priorities: (Priority | 'All')[] = ['All', 'High', 'Medium', 'Low'];

interface PriorityFilterProps {
    selectedPriority: Priority | 'All';
    setSelectedPriority: (priority: Priority | 'All') => void;
}

const PriorityFilter: React.FC<PriorityFilterProps> = ({ selectedPriority, setSelectedPriority }) => {
    
    const getButtonClass = (priority: Priority | 'All') => {
        const baseClass = 'px-3 py-1 text-sm font-medium rounded-full transition-colors';
        if (selectedPriority === priority) {
            return `${baseClass} bg-sky-600 text-white`;
        }
        switch (priority) {
            case 'High':
                return `${baseClass} bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/80`;
            case 'Medium':
                return `${baseClass} bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/80`;
            case 'Low':
                return `${baseClass} bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900/80`;
            case 'All':
            default:
                return `${baseClass} bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600`;
        }
    };

    return (
        <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">Priority</h4>
            <div className="flex flex-wrap gap-2">
                {priorities.map(priority => (
                    <button
                        key={priority}
                        onClick={() => setSelectedPriority(priority)}
                        className={getButtonClass(priority)}
                    >
                        {priority}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default memo(PriorityFilter);