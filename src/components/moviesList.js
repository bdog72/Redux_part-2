import React from "react";

const Movieslist = props => {
    console.log(props);

    // prettier-ignore

    const renderMovies = (movies) => (
        movies ?
            movies.map((item, i) => (
                <div key={i}>
                    <h1 style={{ fontFamily: "Mouse Memoirs"}}>{item.name}</h1>
                </div>
            )) : null
    );

    return <div>{renderMovies(props.data.movies)}</div>;
};

export default Movieslist;
