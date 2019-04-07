import { AppState } from '../../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlayers, filterPlayers } from '../actions';
import PlayerFinder from '../components/player-finder/player-finder';
import React, { Component } from 'react';
import { FootballPlayerDefault } from '../core/football.models';

class PlayerFinderContainer extends Component<any> {

    static propTypes = {
        players: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
            team: PropTypes.string.isRequired
        }).isRequired),
        loading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired
    }

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
  