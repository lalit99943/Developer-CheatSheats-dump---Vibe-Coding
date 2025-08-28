
export type SnippetType = 'code' | 'chat' | 'svg' | 'chart';

export interface ChatMessage {
    author: 'user' | 'model';
    content: string;
}

export interface ChartSeries {
    dataKey: string;
    color: string;
}

export interface ChartConfig {
    type: 'bar' | 'area';
    data: any[];
    xAxisDataKey: string;
    series: ChartSeries[];
}

export type Priority = 'High' | 'Medium' | 'Low';

export interface CheatSheet {
    id: string;
    category: string;
    subCategory: string;
    title: string;
    snippet: string | ChatMessage[] | ChartConfig;
    description: string;
    tags: string[];
    type?: SnippetType;
    priority?: Priority;
}