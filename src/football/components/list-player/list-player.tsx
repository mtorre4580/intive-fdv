import './list-player.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FootballPlayer } from '../../core/football.models';
import Player from '../player/player';

export default function ListPlayer({ players } : { players : FootballPlayer[]}) {
    return (
        <div className="table-responsive" role="table" aria-label="Players" aria-describedby="players_finder_table">
            <table className="table table-bordered table-striped text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" role="columnheader">Player</th>
                        <th scope="col">Position</th>
                        <th scope="col">Team</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((p, i) => <Player {...p} key={i} />)}
                </tbody>
            </table>
        </div>
    );
}

ListPlayer.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired
    }).isRequired)
}