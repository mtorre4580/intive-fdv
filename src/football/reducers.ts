import { FootballActionTypes, FETCH_PLAYERS_LOADING, FETCHED_PLAYERS, FETCH_PLAYERS_ERR, FILTER_PLAYERS } from './types';
import { FootballState, FootballPlayer } from './core/football.models';

/**
 * Initial state football
 */
const initialState : FootballState = {
    players: [],
    loading: false,
    error: false,
    search: null
}

export function footballReducer(state = initialState, action: FootballActionTypes) : FootballState {
    switch (action.type) {
        case FETCH_PLAYERS_LOADING:
            return {
                ...state,
                loading: true,
                players: [],
                error: false
            }
        case FETCHED_PLAYERS:
            return {
                ...state, 
                players: action.players,
                loading: false,
                error: false
            }
        case FETCH_PLAYERS_ERR:
            return {
                ...state,
                error: action.err,
                loading: false
            }
        case FILTER_PLAYERS:
            const { players } = { ...state };
            const { search } = action;
            return {
                ...state, 
                search,
                players: players.filter((p: FootballPlayer) => p.age === search.age || p.position === search.position || p.name.includes(search.name))
            }
        default:
            return state;
    }
}