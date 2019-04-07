import { createSelector } from 'reselect';
import { AppState } from '../store';
import { FootballPlayer } from './core/football.models';

const getSearchSelector = (state: AppState) => state.football.search;
const getPlayersSelector = (state: AppState) => state.football.players;

/**
 * nunca use reselect estoy medio verde mucho angular en almundo, verificar si esta bien implementado #FIXME (Si hay tiempo)
 */
export const getPlayers = createSelector(
    [getPlayersSelector, getSearchSelector], 
    (players : FootballPlayer[], search: any) => {
        if (search) {
            const { age, position, name } = search;
            return players.filter(p => (age === '' || parseInt(p.age) === parseInt(age)) && (position === '' || p.position === position) && (name === '' || p.name === name));
        }
        return players;
});