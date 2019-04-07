import { FootballPlayer, FootballPlayerResponse } from './football.models';

/**
 * Mapper of API FootballPlayer
 * @param {FootballPlayerResponse[]} players
 * @return {FootballPlayer[]}
 */
export default function mapperPlayer(players: FootballPlayerResponse[]) : FootballPlayer[] {
    return players.map((player: FootballPlayerResponse) => {
        return {
         name: player.name,
         team: player.nationality,
         age: getAge(player.dateOfBirth),
         position: player.position
        }
     });
}

/**
 * Get the Age today by birthday
 * @param {string} birthday
 * @return {Number}
 */
const getAge = (birthday: string) => {
    const date = new Date(birthday);
    return new Number((new Date().getTime() - date.getTime()) / 31536000000).toFixed(0);
}
