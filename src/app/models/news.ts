export interface News {
    main: string;
    news: Array<New>;
}

export interface New {
    id: string;
    date: Date
}