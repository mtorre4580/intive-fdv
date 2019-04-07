import axios, { AxiosInstance } from 'axios';
import mapperPlayer from './football.mapper';
import { FootballPlayer } from './football.models';

/**
 * Services football handle API
 */
export class FootballService {

    private static API_URL = 'https://football-players-b31f2.firebaseio.com';
    private http: AxiosInstance;

    constructor() {
        this.http = axios.create({ baseURL: FootballService.API_URL });
    }

    /**
     * Get all players from API
     * @return {Promise<FootballPlayer[]>}
     * @throws {Error} if request falied
     */
    public async getPlayers() : Promise<FootballPlayer[]> {
       try {
        const { data } = await this.http.get('/players.json');
        return mapperPlayer(data);
       } catch(err) {
            throw new Error(`Error to fetch all players ${err}`);
       }
    }

}