import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../Components/MovieList';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies();

  }, []);

  const fetchMovies = async () => {
    try{
      const response = await axios.get('http://localhost:3002/movies');
      const moviesData = Array.isArray(response.data) ? response.data : [];
      setMovies(moviesData.slice(0,2));
    }catch(error){
      console.error('Error fetching movies:', error)
      setMovies([]);
    }
  };

  const handleSearch = async () => {
    try{
      const response = await axios.get('http://localhost:3002/movies');
      //setMovies(response.data.movies || []);
      const allMovies = Array.isArray(response.data) ? response.data : [];

      const filteredMovies = allMovies.filter(movie =>
        (movie.moviename &&  movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())) |
        (movie.genre && movie.genre.toLowerCase().includes(searchTerm.toLowerCase())) |
        movie.rating.includes(searchTerm)
      );
      setMovies(filteredMovies);
    }catch(error){
      console.error('Error searching movies:', error);
      setMovies([]);
    }
  };

  // const handleReset = () => {
  //   setMovies([]); // Clear the search results
  //   setSearchTerm(''); // Clear the search input
  // };

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <div className="input-group-mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
