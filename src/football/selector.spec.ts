import { getPlayers } from './selectors';
import { AppState } from '../store';

const footballPlayersMock =  [{"name":"Romelu Lukaku","team":"Belgium","age":"26","position":"Centre-Forward"},{"name":"David de Gea","team":"Spain","age":"28","position":"Keeper"},{"name":"Sergio Romero","team":"Argentina","age":"32","position":"Keeper"},{"name":"Eric Bailly","team":"Cote d'Ivoire","age":"25","position":"Centre-Back"},{"name":"Chris Smalling","team":"England","age":"29","position":"Centre-Back"},{"name":"Marcos Rojo","team":"Argentina","age":"29","position":"Centre-Back"},{"name":"Phil Jones","team":"England","age":"27","position":"Centre-Back"},{"name":"Daley Blind","team":"Netherlands","age":"29","position":"Left-Back"},{"name":"Luke Shaw","team":"England","age":"24","position":"Left-Back"},{"name":"Matteo Darmian","team":"Italy","age":"29","position":"Right-Back"},{"name":"Antonio Valencia","team":"Ecuador","age":"34","position":"Right-Back"},{"name":"Michael Carrick","team":"England","age":"38","position":"Defensive Midfield"},{"name":"Paul Pogba","team":"France","age":"26","position":"Central Midfield"},{"name":"Ander Herrera","team":"Spain","age":"30","position":"Central Midfield"},{"name":"Marouane Fellaini","team":"Belgium","age":"31","position":"Central Midfield"},{"name":"Ashley Young","team":"England","age":"34","position":"Left Midfield"},{"name":"Juan Mata","team":"Spain","age":"31","position":"Attacking Midfield"},{"name":"Jesse Lingard","team":"England","age":"26","position":"Left Wing"},{"name":"Anthony Martial","team":"France","age":"23","position":"Left Wing"},{"name":"Zlatan Ibrahimovic","team":"Sweden","age":"38","position":"Centre-Forward"},{"name":"Marcus Rashford","team":"England","age":"21","position":"Centre-Forward"},{"name":"Alexis Sánchez","team":"Chile","age":"30","position":"Left Wing"},{"name":"Nemanja Matic","team":"Serbia","age":"31","position":"Defensive Midfield"},{"name":"Victor Lindelöf","team":"Sweden","age":"25","position":"Centre-Back"},{"name":"Joel Pereira","team":"Portugal","age":"23","position":"Keeper"},{"name":"Cameron Borthwick-Jackson","team":"England","age":"22","position":"Left-Back"},{"name":"Scott McTominay","team":"Scotland","age":"22","position":"Attacking Midfield"}];

describe('Football Selectors', () => {

    it('getPlayersSelector => should return the players no filter', () => {
        const mockState : AppState = {
            football: {
                players: footballPlayersMock,
                search: null,
                error: false,
                loading: false
            }
        }
        expect(getPlayers(mockState)).toEqual(footballPlayersMock);
    });
    
    it('getPlayersSelector => should return the players no filter', () => {
        const mockState : AppState = {
            football: {
                players: footballPlayersMock,
                search: { name: 'Romelu Lukaku', age: '', position: '' },
                error: false,
                loading: false
            }
        }
        const expectedPlayer = [{'name':'Romelu Lukaku','team':'Belgium','age':'26','position':'Centre-Forward'}];
        expect(getPlayers(mockState)).toEqual(expectedPlayer);
    });

});
