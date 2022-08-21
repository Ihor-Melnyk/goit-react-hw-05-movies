import { useState, useEffect } from 'react';
import { fetchTrendingToday } from 'components/service/movie-service';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getTrendingToday = async () => {
      try {
        const data = await fetchTrendingToday();
        return setMovies(data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingToday();
  }, []);

  return { movies, error, isLoading };
};
