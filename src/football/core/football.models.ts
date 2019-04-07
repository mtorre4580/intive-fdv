/**
 * Response FootballPlayer API
 */
export interface FootballPlayerResponse {
    contractUntil: string;
    dateOfBirth: string;
    jerseyNumber: number;
    name: string;
    nationality: string;
    position: string;
}

/**
 * Custom implementation of response FootballPlayer API
 */
export interface FootballPlayer extends FootballPlayerDefault {
    team: string;
}

/**
 * Default params FootballPlayer
 */
export interface FootballPlayerDefault {
    name: string;
    position: string;
    age: string;
}

/**
 * State football
 */
export interface FootballState {
    players: FootballPlayer[];
    loading: boolean;
    error: Error | boolean;
    search: any;
}