import { FootballPlayer, FootballPlayerDefault } from './core/football.models';

// Constants
export const FETCH_PLAYERS_LOADING = 'FETCH_PLAYERS_LOADING';
export const FETCHED_PLAYERS = 'FETCHED_PLAYERS';
export const FETCH_PLAYERS_ERR = 'FETCH_PLAYERS_ERR';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';

// Interfaces for Actions (Check types)
interface FetchPlayersLoadingAction {
    type: typeof FETCH_PLAYERS_LOADING;
}

interface FetchedPlayersAction {
    type: typeof FETCHED_PLAYERS;
    players: FootballPlayer[];
}

interface FetchPlayersErrorAction {
    type: typeof FETCH_PLAYERS_ERR;
    err: Error;
}

interface FilterPlayersAction {
    type: typeof FILTER_PLAYERS;
    search: FootballPlayerDefault;
}

// Actions
export type FootballActionTypes = FetchPlayersLoadingAction | FetchedPlayersAction | FetchPlayersErrorAction | FilterPlayersAction;