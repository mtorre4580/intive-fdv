import React from 'react';
import { FootballPlayer } from '../../core/football.models';

export default function Player({name, team, age, position} : any) {
    return (
        <tr>
            <td>{name}</td>
            <td>{position}</td>
            <td>{team}</td>
            <td>{age}</td>
        </tr>
    );
}