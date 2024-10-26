import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    if (!Array.isArray(movies)){
        return <p>No movies available.</p>
    }
    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id} className="mb-2">
                    <Link to={`/movie/${movie.id}`} className="fw-bold">{movie.moviename}</Link> - {movie.genre}
                </div>
            ))}
        </div>
    );
};

export default MovieList;
