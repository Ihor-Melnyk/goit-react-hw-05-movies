import { fetchActorsMovie } from 'components/service/movie-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './CastList';
export const Cast = () => {
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

  return (
    <div>
      <CastList actors={actors} />
    </div>
  );
};
