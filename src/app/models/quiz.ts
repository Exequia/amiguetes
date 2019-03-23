export interface Quiz {
    name: string;
    options: Array<Option>;
    finish: Date;
    totalVotes: number;
}

export interface Option {
    name: string;
    votes: number;
    percent: number;
}