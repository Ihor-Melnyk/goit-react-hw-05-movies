import { fetchActorsMovie } from 'components/service/movie-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getActors = async () => {
      const data = fetchActorsMovie(movieId);
      data.then(res => setActors(res.cast));
    };
    getActors();
  }, [movieId]);
  return actors;
};
