import { AppState } from '../../store';
import { connect } from "react-redux";
import { fetchPlayers, filterPlayers } from '../actions';
import PlayerFinder from '../components/player-finder/player-finder';
import React, { Component } from 'react';
import { FootballPlayerDefault } from '../core/football.models';

class PlayerFinderContainer extends Component<any> {

    componentDidMount() {
        this.props.fetchPlayers();
    }

    handleSearch = (search: FootballPlayerDefault) => {
        this.props.filterPlayers(search);
    }

    render() {
        return (
            <PlayerFinder players={this.props.players} loading={this.props.loading} error={this.props.error} onSearch={this.handleSearch} />
        );
    }
}

const mapStateToProps = (state : AppState) => ({...state.football });
  
export default connect(mapStateToProps, { fetchPlayers, filterPlayers })(PlayerFinderContainer);
  