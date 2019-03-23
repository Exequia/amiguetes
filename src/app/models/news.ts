export interface News {
    main: string;
    news: Array<New>;
}

export interface New {
    title: string;
    summary: string;
    description: string;
    date: Date
}