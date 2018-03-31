import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
    componentWillMount() {
        this.props.movieslist();
    }

    // prettier-ignore

    renderMovies = (movies) => (
        movies ?
            movies.map(item => (
                <div>
                    <h1>{item.name}</h1>
                </div>
            )) : null
    );

    // prettier-ignore

    render() {
        return (
            <div>
                {this.renderMovies(this.props.data.movies)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.movies
    };
};

export default connect(mapStateToProps, actions)(App);
