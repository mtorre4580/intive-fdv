import { fetchPlayersLoading, fetchedPlayers, fetchPlayersErr, filterPlayers, fetchPlayers } from './actions';
import { FETCH_PLAYERS_LOADING, FETCHED_PLAYERS, FETCH_PLAYERS_ERR, FILTER_PLAYERS, FootballActionTypes } from './types';
import { FootballPlayer, FootballPlayerDefault } from './core/football.models';

describe('Football Actions', () => {

    describe('FetchPlayersLoadingAction', () => {
        it('should create an action to fetch the players', () => {
            const expectedAction : FootballActionTypes = {
                type: FETCH_PLAYERS_LOADING
            }
            expect(fetchPlayersLoading()).toEqual(expectedAction);
        });
    });

    describe('FetchedPlayersAction', () => {
        it('should create an action to set the players from API', () => {
            const mockPlayers : FootballPlayer[]= [];
            const expectedAction : FootballActionTypes = {
                type: FETCHED_PLAYERS,
                players: mockPlayers
            };
            expect(fetchedPlayers(mockPlayers)).toEqual(expectedAction);
        });
    });

    describe('FetchPlayersErrorAction', () => {
        it('should create an action to set the error from API', () => {
            const mockError : Error = new Error('Falied to get response from server');
            const expectedAction : FootballActionTypes = {
                type: FETCH_PLAYERS_ERR,
                err: mockError
            };
            expect(fetchPlayersErr(mockError)).toEqual(expectedAction);
        });
    });

    describe('FilterPlayersAction', () => {
        it('should create an action filter player via params search', () => {
            const mockFormSearch : FootballPlayerDefault = {
                age: '22',
                name: 'Lionel',
                position: 'Centre-Back'
            };
            const expectedAction : FootballActionTypes = {
                type: FILTER_PLAYERS,
                search: mockFormSearch
            }
            expect(filterPlayers(mockFormSearch)).toEqual(expectedAction);
        });
    });

    describe("FetchPlayersAction Thunk", () => {
        it("should create an action async and then call dispatch...", async () => {
          const dispatch = jest.fn();
          const getState = jest.fn();
          await fetchPlayers()(dispatch, getState, null);
          expect(dispatch).toBeCalledWith({type: FETCH_PLAYERS_LOADING});
          //expect(dispatch).toBeCalledWith({type: FETCHED_PLAYERS, players: [] });
        });
      });


})