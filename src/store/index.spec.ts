import configureStore from '.';
import { FootballState } from '../football/core/football.models';

describe('Football Reducers', () => {
    it('should return the initial state of football', () => {
        const expectedStateDefault : FootballState = {
            players: [],
            loading: false,
            error: false,
            search: null
          };
        const store = configureStore();
        expect(store.getState().football).toEqual(expectedStateDefault);
  });
});