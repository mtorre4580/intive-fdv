import React from 'react';
import PropTypes from 'prop-types';

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

Player.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired
}