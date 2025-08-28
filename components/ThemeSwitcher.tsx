import React from 'react';
import { SunIcon, MoonIcon } from './IconComponents';

interface ThemeSwitcherProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <MoonIcon className="h-6 w-6" />
            ) : (
                <SunIcon className="h-6 w-6" />
            )}
        </button>
    );
};

export default ThemeSwitcher;
