import './player-finder.scss';
import React from 'react';
import PropTypes from 'prop-types';
import FormPlayer from '../form-player/form-player';
import ListPlayer from '../list-player/list-player';
import LoadingResults from '../../../commons/loading-results/loading-results';

export default function PlayerFinder({onSearch, players, loading, error } : any) {
    return (
        <section className="player-finder-ctn" role="section">
            <header>
                <h1 className="player-finder-ctn__title">Football Player Finder</h1>
            </header>
            <FormPlayer onSearch={onSearch} />
            { loading && <LoadingResults /> }
            { !loading && !error && players.length > 0 && <ListPlayer players={players} /> }
            { !loading && !error && players.length === 0 && <p className="text-center">No results</p> }
            { !loading && error && <p>Err</p> }
        </section>
    );
}

PlayerFinder.propTypes = {
    onSearch: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired
    }).isRequired),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
}