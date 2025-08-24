import React, { memo, useState, useMemo } from 'react';
import { 
    FolderIcon, XIcon, CodeIcon, SearchIcon, HomeIcon, GitIcon, DockerIcon,
    KubernetesIcon, DatabaseIcon, TerminalIcon, PythonIcon, JavaScriptIcon,
    AngularIcon, RegexIcon, CssIcon, ApiIcon, MavenIcon, SpringIcon, JavaIcon,
    BriefcaseIcon, BrainCircuitIcon, NetworkIcon, AwsIcon, NpmIcon, MongoDbIcon,
    NodeJsIcon, SecurityIcon, AlgorithmsIcon, DataStructuresIcon, ProtocolsIcon,
    SystemArchitectureIcon, ServerIcon, JUnitIcon, OAuthIcon, CiCdMonitoringIcon
} from './IconComponents';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryIcon: React.FC<{ category: string; className: string }> = memo(({ category, className }) => {
    switch (category.toLowerCase()) {
        case 'all': return <HomeIcon className={className} />;
        case 'git': return <GitIcon className={className} />;
        case 'docker':
        case 'dockerfile': return <DockerIcon className={className} />;
        case 'kubernetes': return <KubernetesIcon className={className} />;
        case 'sql': return <DatabaseIcon className={className} />;
        case 'command line': return <TerminalIcon className={className} />;
        case 'python': return <PythonIcon className={className} />;
        case 'pip': return <PythonIcon className={className} />;
        case 'javascript': return <JavaScriptIcon className={className} />;
        case 'angular': return <AngularIcon className={className} />;
        case 'regex': return <RegexIcon className={className} />;
        case 'css': return <CssIcon className={className} />;
        case 'rest': return <ApiIcon className={className} />;
        case 'maven': return <MavenIcon className={className} />;
        case 'spring':
        case 'springmvc':
        case 'springboot':
        case 'spring ai': return <SpringIcon className={className} />;
        case 'java 8':
        case 'java basics': return <JavaIcon className={className} />;
        case 'management': return <BriefcaseIcon className={className} />;
        case 'ai': return <BrainCircuitIcon className={className} />;
        case 'networking': return <NetworkIcon className={className} />;
        case 'aws': return <AwsIcon className={className} />;
        case 'npm': return <NpmIcon className={className} />;
        case 'mongodb': return <MongoDbIcon className={className} />;
        case 'node.js': return <NodeJsIcon className={className} />;
        case 'security': return <SecurityIcon className={className} />;
        case 'algorithms': return <AlgorithmsIcon className={className} />;
        case 'data structures': return <DataStructuresIcon className={className} />;
        case 'protocols': return <ProtocolsIcon className={className} />;
        case 'system architecture': return <SystemArchitectureIcon className={className} />;
        case 'servers': return <ServerIcon className={className} />;
        case 'junit': return <JUnitIcon className={className} />;
        case 'oauth and sso': return <OAuthIcon className={className} />;
        case 'ci/cd and monitoring': return <CiCdMonitoringIcon className={className} />;
        default: return <FolderIcon className={className} />;
    }
});


const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, categories, selectedCategory, setSelectedCategory }) => {
    const [categorySearch, setCategorySearch] = useState('');

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        if (window.innerWidth < 768) { // Close sidebar on mobile after selection
            setIsOpen(false);
        }
    };

    const filteredCategories = useMemo(() => {
        if (!categorySearch) {
            return categories;
        }
        const lowercasedFilter = categorySearch.toLowerCase();
        return categories.filter(category =>
            category.toLowerCase().includes(lowercasedFilter)
        );
    }, [categories, categorySearch]);
    
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
            <aside className={`bg-slate-800 flex flex-col z-40 fixed h-full transition-all duration-300 ease-in-out ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-20 md:translate-x-0'}`}>
                <div className={`flex items-center justify-between p-4 border-b border-slate-700 h-16 ${!isOpen && 'md:justify-center'}`}>
                    <div className="flex items-center overflow-hidden">
                       <CodeIcon className="h-8 w-8 text-sky-400 flex-shrink-0" />
                       <h1 className={`text-xl font-bold ml-2 text-white whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>cheatsheats</h1>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="md:hidden p-1 rounded-md hover:bg-slate-700">
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
                
                <div className="flex flex-col flex-1 overflow-y-hidden">
                    <div className={`p-4 space-y-2 border-b border-slate-700/50 overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 p-0 border-0'}`}>
                        <p className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Categories</p>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Filter categories..."
                                value={categorySearch}
                                onChange={(e) => setCategorySearch(e.target.value)}
                                className="block w-full bg-slate-700 border border-slate-600 rounded-md py-1.5 pl-9 pr-8 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                aria-label="Filter categories"
                            />
                            {categorySearch && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        onClick={() => setCategorySearch('')}
                                        className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-600 focus:outline-none"
                                        aria-label="Clear filter"
                                    >
                                        <XIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <nav className="flex-1 px-4 py-2 overflow-y-auto">
                        <ul className="space-y-1">
                            {filteredCategories.map(category => (
                                <li key={category}>
                                    <button
                                        onClick={() => handleCategoryClick(category)}
                                        className={`w-full flex items-center py-2 rounded-md transition-colors text-sm font-medium ${selectedCategory === category ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'} ${isOpen ? 'px-3' : 'md:px-0 md:justify-center'}`}
                                        title={category}
                                    >
                                        <CategoryIcon category={category} className={`h-5 w-5 flex-shrink-0 ${isOpen ? 'mr-3' : 'md:mr-0'}`} />
                                        <span className={`whitespace-nowrap ${isOpen ? 'inline' : 'hidden'}`}>
                                            {category}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default memo(Sidebar);