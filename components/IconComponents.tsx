import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const FolderIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v3.042m-7.416 0V3.888c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const LoaderIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path d="M12 3v.01M12 21v-.01M21 12h-.01M3 12h.01M18.364 5.636l-.01.01M5.636 18.364l.01-.01M18.364 18.364l-.01-.01M5.636 5.636l.01.01" />
    </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.142"/><path d="M18 13a3 3 0 1 0-4.42 2.495"/><path d="M5 13a3 3 0 1 0-1.58 2.815"/><path d="M12 21a3 3 0 1 0 5.993-.142"/><path d="M5 5a3 3 0 1 0 1.58-2.815"/><path d="M18 5a3 3 0 1 0 4.42-2.495"/><path d="M11.5 21.5a2.5 2.5 0 0 0 0-5"/><path d="M11.5 5.5a2.5 2.5 0 0 0 0-5"/><path d="M5.5 11.5a2.5 2.5 0 0 1-5 0"/><path d="M18.5 11.5a2.5 2.5 0 0 1 5 0"/><path d="M12 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M16 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M8 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M12.5 13.5a2.5 2.5 0 0 0 5 0"/><path d="M12.5 5.5a2.5 2.5 0 0 0 5 0"/><path d="M8 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="m4.03 14.51 1.92.51"/><path d="m3.52 7.03 1.41 1.41"/><path d="m7.03 3.52 1.41 1.41"/><path d="m14.51 4.03.51 1.92"/><path d="m20 8-2 2"/><path d="m18 16 2 2"/><path d="m16 18-2-2"/></svg>
);

export const CodeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75c0 3.28-2.672 5.952-5.952 5.952H4.5m0-5.952a5.952 5.952 0 100 11.904" />
    <circle cx="17.25" cy="6.75" r="2.25" />
    <circle cx="4.5" cy="12.702" r="2.25" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.03 6.93c-1.33-2.12-3.8-3.43-6.52-3.43h-7.01c-.4 0-.72.32-.72.72v12.56c0 .4.32.72.72.72h7.01c2.72 0 5.19-1.31 6.52-3.43.23-.37.35-.79.35-1.23v-6.18c0-.44-.12-.86-.35-1.23zM15.5 15.1H8.48V9.89h1.71v3.31h1.34v-3.31h1.72v3.31h1.53v-3.31h.72v5.21zm-1.73-8.6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm-1.71 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm-1.71 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" />
    </svg>
);

export const KubernetesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75l5.25-3.03V8.28L12 5.25 6.75 8.28v10.44L12 21.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v16.5m5.25-13.47L6.75 11.28m10.5 3.96L6.75 8.28" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25L6.75 5.28l5.25 3 5.25-3L12 2.25z" />
    </svg>
);

export const DatabaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 8.967v1.036c0 .888.358 1.704.97 2.298l.492.492a5.25 5.25 0 007.424 0l.492-.492a3 3 0 00.97-2.298v-1.036A8.967 8.967 0 0012 6.042zm0 9.192a5.25 5.25 0 00-5.25 5.25v.003h10.5v-.003a5.25 5.25 0 00-5.25-5.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5a8.967 8.967 0 016-2.925m6 2.925a8.967 8.967 0 016-2.925" />
    <ellipse cx="12" cy="9" rx="9" ry="3" />
  </svg>
);

export const TerminalIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v8.25a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 11.23a2.45 2.45 0 01-1.63-.64l-.2-.23-4.62 4.63a2.45 2.45 0 01-3.46 0 2.45 2.45 0 010-3.46l4.62-4.63-.2-.23a2.45 2.45 0 01-.64-1.63H3.01v-2h2.86a2.45 2.45 0 01.64-1.63l.2-.23L2.09 1.55a2.45 2.45 0 010-3.46 2.45 2.45 0 013.46 0l4.62 4.63.2.23a2.45 2.45 0 011.63.64h5.54a2.45 2.45 0 011.63.64l.2.23 4.62-4.63a2.45 2.45 0 013.46 0 2.45 2.45 0 010 3.46l-4.62 4.63.2.23a2.45 2.45 0 01.64 1.63h2.86v2h-2.86a2.45 2.45 0 01-.64 1.63l-.2.23 4.62 4.63a2.45 2.45 0 010 3.46 2.45 2.45 0 01-3.46 0l-4.62-4.63-.2-.23a2.45 2.45 0 01-1.63-.64h-5.54z" />
    </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.5 0h-21C.67 0 0 .67 0 1.5v21c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5v-21c0-.83-.67-1.5-1.5-1.5zM15.41 17.65c-.44.69-1.09 1.18-1.92 1.44-.83.26-1.7.27-2.54.02-.84-.25-1.59-.76-2.14-1.46s-.88-1.55-.91-2.49h2.38c.04.59.25 1.1.6 1.45.35.35.8.54 1.28.54.52 0 .97-.13 1.3-.39.33-.26.49-.6.49-1.02s-.14-.76-.43-1.02c-.29-.26-.7-.46-1.23-.62l-1.03-.31c-.91-.27-1.64-.69-2.13-1.21-.49-.52-.73-1.18-.73-1.92 0-.71.24-1.35.7-1.89s1.08-.9 1.83-1.14c.75-.24 1.53-.24 2.29-.01.76.23 1.41.7 1.91 1.36l-1.99 1.34c-.26-.41-.6-.7-1.02-.88-.42-.18-.88-.2-1.32-.08-.44.12-.8.36-1.05.7-.25.34-.38.74-.38 1.18s.13.8.39 1.07c.26.27.63.48 1.07.63l1.03.31c.98.29 1.76.73 2.28 1.29.52.56.78 1.26.78 2.04 0 .73-.23 1.4-.69 1.96z" />
    </svg>
);

export const AngularIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 1.27l9 2.45v13.56l-9 4.45-9-4.45V3.72l9-2.45zM12 3l-7.58 2.05v10.53L12 19.34l7.58-3.76V5.05L12 3zm0 2.37l4.4 7.55h-2.19l-1.1-1.91h-2.22l-1.1 1.91H7.6l4.4-7.55zm-.55 4.5h1.1l-.55-1.1-.55 1.1z" />
    </svg>
);

export const RegexIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 8.25h-.5m.5 8.5h-.5m-3.5-8.5h-.5m.5 8.5h-.5M9 8.25h-.5m.5 8.5h-.5m-3-4.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" />
  </svg>
);

export const CssIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.5 3h15l-1.36 15.34-6.14 1.66-6.14-1.66L4.5 3zM12 5.25l4.58 1.25-1.12 6.5H12V5.25zm0 9.25h2.8l-.34 3.75-2.46.75v-4.5z" />
    </svg>
);

export const ApiIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

export const MavenIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

export const SpringIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9h-9V3a9 9 0 00-9 9c0 4.968 4.032 9 9 9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 14.25c-.56-2.025-2.075-3.6-4.125-4.125" />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6.75V4.125c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v2.625m11.25 6c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 16.5h.01M9 16.5h.01M12 16.5h.01M15 16.5h.01M18 16.5h.01" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.125c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.275V14.15m16.5 0a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25m16.5 0v-2.25A2.25 2.25 0 0018 9.75h-1.5A2.25 2.25 0 0015 12v2.25m-6 0v-2.25A2.25 2.25 0 007.5 9.75H6A2.25 2.25 0 003.75 12v2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v-2.25" />
  </svg>
);

export const NetworkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12H20.25M12 3.75c-3.12 0-5.655 4.363-5.655 9.75 0 5.387 2.535 9.75 5.655 9.75 3.12 0 5.655-4.363-5.655-9.75 0-5.387-2.535-9.75-5.655-9.75z" />
  </svg>
);

export const AwsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.62 14.38c-.22 0-.4-.19-.4-.42v-1.92c0-1.09.73-1.63 1.5-1.63.78 0 1.5.54 1.5 1.63v1.92c0 .23-.18.42-.4.42h-.79c-.22 0-.4-.19-.4-.42v-1.87c0-.5-.33-.78-.71-.78-.38 0-.71.28-.71.78v1.87c0 .23-.18.42-.4.42zm-2.73-1.8h-1.2v.33c0 .24-.18.43-.4.43h-.8c-.22 0-.4-.19-.4-.43v-3.79c0-.24.18-.43.4-.43h.8c.22 0 .4.19.4.43v1.54h1.2c.22 0 .4.19.4.43v.66c0 .24-.18.43-.4.43zm-4.31 3.32c-.15.15-.34.22-.54.22h-1.07c-.2 0-.39-.07-.54-.22-.15-.15-.22-.34-.22-.54v-6.38c0-.2.07-.39.22-.54.15-.15.34-.22.54-.22h1.07c.2 0 .39.07.54.22.15.15.22.34.22.54v6.38c0 .2-.07.39-.22.54zM22.54 9.17c-.08-.24-.26-.44-.48-.56-1.12-.59-2.78-1.2-5-1.2-2.34 0-4.47.7-4.47 2.84 0 .9.4 1.53 1.13 2.05.52.37 1.25.72 2.2.72.92 0 1.5-.18 1.95-.4.24-.12.4-.33.45-.58l.75-2.82zm-4.36 1.05c-.34 0-.68-.13-.91-.35-.23-.22-.35-.5-.35-.81 0-.5.34-.84.78-.84.44 0 .78.34.78.84 0 .31-.12.59-.35.81-.23.22-.56.35-.95.35zm-9.36 5.68c-.68.68-1.57 1.03-2.68 1.03-1.64 0-2.88-.93-2.88-2.6 0-1.8 1.3-2.67 2.82-2.67 1.08 0 1.95.38 2.65 1.05.2.2.48.2.68 0l.56-.56c.2-.2.2-.5 0-.7-.8-.78-1.93-1.28-3.32-1.28-2.36 0-4.22 1.6-4.22 4.1 0 2.52 1.9 4.14 4.3 4.14 1.4 0 2.57-.47 3.4-1.28.2-.2.2-.5 0-.7l-.56-.56c-.2-.19-.49-.19-.69 0z"/>
  </svg>
);

export const NpmIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    <path d="M0 0h576v512H0V0zm288 48h-64v208h64V48zm-96 0h-32v240h128V48H192zm160 0h32v240h-96V48h64zM96 288h128v176H96V288zm160 0h128v176H256V288z"/>
  </svg>
);

export const MongoDbIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.13 4.29c-1.93-1.4-4.4-2.1-7.2-2.1C5.23 2.19.89 4.31.25 8.13c-.64 3.82 2.13 8.16 6.06 10.63 1.93 1.23 4.23 1.93 6.78 1.93 2.55 0 4.85-.7 6.78-1.93 3.93-2.47 6.7-6.81 6.06-10.63-.64-3.82-5-5.94-8.8-7.54zm-4.14 13.57c-1.31.21-2.58-.2-3.66-1.12-1.73-1.48-2-3.95-1.28-5.83.72-1.88 2.66-3.13 4.71-3.13.4 0 .79.06 1.16.18 1.31-.21 2.58.2 3.66 1.12 1.73 1.48 2 3.95 1.28 5.83-.72 1.88-2.66 3.13-4.71 3.13-.4 0-.79-.06-1.16-.18z"/>
  </svg>
);

export const NodeJsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.83 16.95l-1.84-1.07-5.05-2.92v5.83l5.05 2.92 1.84 1.07c.22.13.48.19.74.19s.52-.06.74-.19l7.07-4.08V8.99l-1.84-1.07-5.23-3.02-3.48-2.01c-.22-.13-.48-.19-.74-.19s-.52.06-.74.19L2.83 7.92c-.44.26-.74.72-.74 1.24v5.68c0 .52.3 1 .74 1.24l3.48 2.01 1.56.9zm.17-14.07c.07 0 .14.02.2.06l3.48 2.01 5.23 3.02 1.66.96v2.1l-6.89 3.98-1.84 1.07-.18.1-.02.01-.18-.1-1.84-1.07-5.05-2.92V9.16l5.05-2.92 1.84-1.07c.06-.04.13-.06.2-.06z" />
  </svg>
);

export const SecurityIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const AlgorithmsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5L3 11.25l3.75 3.75M17.25 7.5l3.75 3.75L17.25 15m-12 3h16.5" />
  </svg>
);

export const DataStructuresIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.33-4.27-9.62-9.5-9.62S.5 6.67.5 12s4.27 9.62 9.5 9.62 9.5-4.29 9.5-9.62zM3.5 12h17" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 21.62c-2.43-1.42-4-4.14-4-7.12 0-2.98 1.57-5.7 4-7.12" />
  </svg>
);

export const ProtocolsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5M8.25 3.75A2.25 2.25 0 006 6v12a2.25 2.25 0 002.25 2.25h11.25a2.25 2.25 0 002.25-2.25v-12a2.25 2.25 0 00-2.25-2.25H8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM4.5 9.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM4.5 6.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25h3.75m-3.75 3.75h3.75" />
  </svg>
);

export const SystemArchitectureIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const ServerIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0a3 3 0 00-3 3v.75a3 3 0 003 3h13.5a3 3 0 003-3v-.75a3 3 0 00-3-3m-13.5-9.75h.008v.008h-.008V4.5z" />
  </svg>
);

export const JUnitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v11.142A2.25 2.25 0 0012 16.5h0a2.25 2.25 0 002.25-2.25V3.104M9.75 3.104C9.75 2.494 10.244 2 10.85 2h2.3c.606 0 1.099.494 1.099 1.104" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 14.25v2.25a2.25 2.25 0 002.25 2.25h0a2.25 2.25 0 002.25-2.25v-2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 8.25l1.5 1.5 1.5-1.5" />
  </svg>
);

export const OAuthIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

export const CiCdMonitoringIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691v4.992" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25l-4.5 4.5 4.5 4.5m4.5-11.25l4.5 4.5-4.5 4.5" />
  </svg>
);