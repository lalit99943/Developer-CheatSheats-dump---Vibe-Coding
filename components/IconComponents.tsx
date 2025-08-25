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
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 16.5h.01M9 16.5h.01M12 16.5h.01" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25L21 12V7.5A2.25 2.25 0 0018.75 5.25H5.25A2.25 2.25 0 003 7.5v4.5l.75 2.25m16.5 0V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V14.25m16.5 0h-16.5" />
  </svg>
);

export const NetworkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.422 0 4.68-.867 6.375-2.25M12 21.75c-2.422 0-4.68-.867-6.375-2.25M12 21.75v-4.5m6.375-2.25c1.383-1.687 2.25-3.882 2.25-6.375C20.625 5.036 16.964 2.25 12 2.25S3.375 5.036 3.375 8.625c0 2.493.867 4.688 2.25 6.375m12.75 0H5.625" />
  </svg>
);

export const AwsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 15.6c-.4.4-.93.6-1.5.6-.57 0-1.1-.2-1.5-.6s-.6-.93-.6-1.5c0-.57.2-1.1.6-1.5s.93-.6 1.5-.6c.57 0 1.1.2 1.5.6s.6.93.6 1.5c0 .57-.2 1.1-.6 1.5zm2.4 0c-.4.4-.93.6-1.5.6-.57 0-1.1-.2-1.5-.6s-.6-.93-.6-1.5c0-.57.2-1.1.6-1.5s.93-.6 1.5-.6c.57 0 1.1.2 1.5.6s.6.93.6 1.5c0 .57-.2 1.1-.6 1.5zm2.4 0c-.4.4-.93.6-1.5.6-.57 0-1.1-.2-1.5-.6s-.6-.93-.6-1.5c0-.57.2-1.1.6-1.5s.93-.6 1.5-.6c.57 0 1.1.2 1.5.6s.6.93.6 1.5c0 .57-.2 1.1-.6 1.5zm-6.3-9.9c.7-1.1 2-1.8 3.4-1.8s2.7.7 3.4 1.8l-1.4 1.4c-.5-.7-1.3-1.1-2-1.1s-1.5.4-2 1.1l-1.4-1.4z" />
  </svg>
);

export const NpmIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.5 0h-21C.67 0 0 .67 0 1.5v21c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5v-21c0-.83-.67-1.5-1.5-1.5zM12 18H6V6h6v12zm6 0h-4.5V6H18v12z" />
  </svg>
);

export const MongoDbIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14c-1.9 1.9-4.4 3-7 3-1.4 0-2.7-.3-3.9-.8.3-.4.6-.8.8-1.3.4-.8.6-1.7.6-2.6 0-1.9-.8-3.7-2.1-5.1.3 0 .6.1.9.1 2.8 0 5.3-1.1 7.2-2.9.1.1.3.2.4.3 1.9 1.9 3 4.4 3 7s-1.1 5.1-3 7z" />
  </svg>
);

export const RedisIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" />
  </svg>
);


export const NodeJsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.09 15.17l-3.3-5.72h1.76l2.43 4.2 2.43-4.2h1.76l-3.3 5.72-1.78-3.09-1.78 3.09z" />
  </svg>
);

export const SecurityIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const AlgorithmsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const DataStructuresIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v18M10.5 3v18M17.25 3v18M3 8.25h18M3 15.75h18" />
  </svg>
);

export const ProtocolsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V4.5m-6 3.75h12" />
  </svg>
);

export const SystemArchitectureIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5v.001M10.5 19.5v.001M4.5 10.5h.001M16.5 10.5h.001M7.21 7.21a5.25 5.25 0 017.58 0m-7.58 0a5.25 5.25 0 000 7.58m7.58-7.58a5.25 5.25 0 010 7.58m0-7.58L12 12m-2.29-2.29a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
  </svg>
);

export const ServerIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0h13.5M6 16.5h12M6 18.75h12" />
  </svg>
);

export const JUnitIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
);

export const OAuthIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

export const CiCdMonitoringIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691v4.992h4.992" />
  </svg>
);

export const ExpandIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 0L15 15" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

export const BotIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v10.5A2.25 2.25 0 006.75 21z" />
    </svg>
);

export const ReactIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(-120 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(-60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        <circle cx="12" cy="12" r="2.2" />
    </svg>
);

export const GcpIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.422 0 4.68-.867 6.375-2.25M12 21.75c-2.422 0-4.68-.867-6.375-2.25M12 21.75v-4.5m6.375-2.25c1.383-1.687 2.25-3.882 2.25-6.375C20.625 5.036 16.964 2.25 12 2.25S3.375 5.036 3.375 8.625c0 2.493.867 4.688 2.25 6.375m12.75 0H5.625" />
    </svg>
);

export const TerraformIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.5 3.75L12 8.25v8.25L4.5 12V3.75zm7.5 0v8.25l7.5 4.5V8.25L12 3.75zM4.5 13.05l7.5 4.5v-2.25l-5.25-3.15v.9z" />
    </svg>
);

export const JestIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V7.5l6 4.5-6 4.5z" />
    </svg>
);

export const GoIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 12c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
    </svg>
);

export const DesignPatternsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5V3M13.25 6l1.3-1.3M16 8.75l1.3-1.3M17.25 12h1.5M16 15.25l1.3 1.3M13.25 18l1.3 1.3M10.5 19.5V21M7.75 18l-1.3 1.3M5 15.25l-1.3 1.3M3.75 12h-1.5M5 8.75L3.7 7.45M7.75 6L6.45 4.7" />
  </svg>
);
