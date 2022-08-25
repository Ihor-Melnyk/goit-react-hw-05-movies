import { fetchSearchMovie } from 'components/service/movie-service';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useSearchMovies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const getMovieByName = async () => {
      try {
        const data = fetchSearchMovie(query);
        data.then(res => setMovies(res.results));
      } catch (error) {
        console.error(error);
      }
    };
    getMovieByName();
  }, [query]);

  return { movies, handleSubmit };
};

export default useSearchMovies;
