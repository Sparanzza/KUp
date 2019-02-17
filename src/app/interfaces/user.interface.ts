export interface User {
    id: string;
    name: string;
    fullName: string;
    level: number;
    nationality: any;
    funModePoints: {
        gamesCompleted: number[];
        bestTime: Date[];
        averageTime: Date[];
        longestWinStreak: number[];
    };
    challengerModePoints: {
        globalPosition: number;
        won: number;
        lost: number;
        rowsWon: number;
        colsWon: number;
        boxsWon: number;
    };
}
