import './list-player.scss';
import React from 'react';
import { FootballPlayer } from '../../core/football.models';
import Player from '../player/player';

export default function ListPlayer({ players } : { players : FootballPlayer[]}) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Position</th>
                    <th scope="col">Team</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {players.map((p, i) => <Player {...p} key={i} />)}
            </tbody>
        </table>
    );

}