import { fetchMovie } from 'components/service/movie-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movie = await fetchMovie(movieId);
        setMovie(movie);
      } catch (error) {
        console.error(error);
      }
    };
    getMovie();
  }, [movieId]);

  return movie;
};
