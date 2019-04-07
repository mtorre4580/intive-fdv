import React, { Component, Fragment } from 'react';
import { trackErrorInSentry } from './error-boundary.service';

export default class ErrorBoundary extends Component {

    state = {
        error : null
    }

    componentDidCatch(error: Error | null, info: Object) {
        trackErrorInSentry(error, info);
        this.setState({ error: error || new Error('Error render component') });
    }
    
    render() {
        return (
            <Fragment>
                { !this.state.error &&  this.props.children }
                { this.state.error && <p>Error ups!!</p> }
            </Fragment>
        );
    }

}