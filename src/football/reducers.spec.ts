import { footballReducer } from './reducers';
import { FootballState } from './core/football.models';
import { FETCH_PLAYERS_LOADING, FETCHED_PLAYERS, FETCH_PLAYERS_ERR, FootballActionTypes, FILTER_PLAYERS } from './types';

describe('Football Reducers', () => {

    it('should return the initial state', () => {
      const expectedInitialState : FootballState = {
        players: [],
        loading: false,
        error: false,
        search: null
      };
      const mockActionNotMatch : any = {
        type: 'ACTION_FAKE'
      };
    expect(footballReducer(undefined, mockActionNotMatch)).toEqual(expectedInitialState);
  });

  it('should handle FETCH_PLAYERS_LOADING', () => {
        const expectedState : FootballState = {
            loading: true,
            players: [],
            error: false,
            search: null
        };
        const mockActionFetchPlayersLoading : FootballActionTypes = {
            type: FETCH_PLAYERS_LOADING
        };
        expect(footballReducer(undefined, mockActionFetchPlayersLoading)).toEqual(expectedState);
  });

  it('should handle FETCHED_PLAYERS', () => {
    const expectedState : FootballState = {
        loading: false,
        players: [],
        error: false,
        search: null
    };
    const mockActionFetchedPlayers : FootballActionTypes = {
        type: FETCHED_PLAYERS,
        players: []
    };
    expect(footballReducer({ ...expectedState, loading: true }, mockActionFetchedPlayers)).toEqual(expectedState);
  });

  it('should handle FETCH_PLAYERS_ERR', () => {
    const expectedState : FootballState = {
        loading: false,
        players: [],
        error: new Error('Error to call API football'),
        search: null
    };
    const mockActionFetchPlayersErr : FootballActionTypes = {
      type: FETCH_PLAYERS_ERR,
      err: new Error('Error to call API football')
    };
    expect(footballReducer({ ...expectedState, error: false, loading: true }, mockActionFetchPlayersErr)).toEqual(expectedState);
  });

  it('should handle FILTER_PLAYERS', () => {
    const mockActionFilterPlayers : FootballActionTypes = {
      type: FILTER_PLAYERS,
      search: {
        age: '18', 
        position: 'Centre-Back',
        name: 'Lionel' 
      }
    };
    const initialState : FootballState = {
      players: [{ age: '18', position: 'Centre-Back', name: 'Lionel', team: 'Argentina'}, {age: '22', position: 'Keeper', team: 'Belgica', name: 'Paul'}],
      loading: false,
      error: false,
      search: null
    }
    const filterPlayersMock = [{ age: '18', position: 'Centre-Back', name: 'Lionel', team: 'Argentina'}];
    expect(footballReducer(initialState, mockActionFilterPlayers)).toEqual({...initialState, search: mockActionFilterPlayers.search, players: filterPlayersMock});
  });

});