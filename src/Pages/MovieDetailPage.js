import React, {useEffect,useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie,setMovie] = useState(null);
  const navigate = useNavigate();

  //if (!movie) return <p>Movie not found.</p>;

  useEffect(() => {
    fetchMovieDetails();
  },[id]);

  const fetchMovieDetails = async () => {
    try{
      const response = await axios.get(`http://localhost:3002/movies/${id}`);
      setMovie(response.data);
    }catch(error){
      console.error('Error fectching movie details', error)
    }
  };

  return (
    <div className="container">
      {movie ?(
        <>
      <h2>Movie Details</h2>
      <h3>{movie.moviename}</h3>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      <p><strong>Crew:</strong> {movie.crew.join(', ')}</p>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back to Movie Search
      </button>
    </>
      ) :(
<p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
