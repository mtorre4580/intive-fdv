import { FootballService } from './core/football.service';
import { FootballPlayer, FootballPlayerDefault } from './core/football.models';
import { FETCH_PLAYERS_LOADING, FETCHED_PLAYERS, FETCH_PLAYERS_ERR, FILTER_PLAYERS, FootballActionTypes }  from './types';
import { Action } from 'redux';
import { AppState } from '../store';
import { ThunkAction } from 'redux-thunk';

// Service for get all players
const footballService = new FootballService();

export function fetchPlayersLoading() : FootballActionTypes {
  return {
    type: FETCH_PLAYERS_LOADING
  }
}

export function fetchedPlayers(players: FootballPlayer[]) : FootballActionTypes {
  return {
    type: FETCHED_PLAYERS,
    players
  }
}

export function fetchPlayersErr(err: Error) : FootballActionTypes {
  return {
    type: FETCH_PLAYERS_ERR, 
    err
  }
}

export function filterPlayers(search: FootballPlayerDefault) : FootballActionTypes {
  return {
    type: FILTER_PLAYERS, 
    search
  }
}

export const fetchPlayers = () : ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(fetchPlayersLoading());
  try {
    const players : FootballPlayer[] = await footballService.getPlayers();
    dispatch(fetchedPlayers(players));
  } catch (err) {
    dispatch(fetchPlayersErr(err))
  }
}