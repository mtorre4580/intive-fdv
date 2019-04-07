import './player-finder.scss';
import React from 'react';
import FormPlayer from '../form-player/form-player';
import ListPlayer from '../list-player/list-player';

export default function PlayerFinder({onSearch, players, loading, error } : any) {
    return (
        <section className="player-finder-ctn" role="section">
            <header>
                <h1>Football Player Finder</h1>
            </header>
            <FormPlayer onSearch={onSearch} />
            { !loading && !error && players.length > 0 && <ListPlayer players={players} /> }
            { !loading && error && <p>Err</p> }
        </section>
    );
}