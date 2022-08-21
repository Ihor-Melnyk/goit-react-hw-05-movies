import { MovieList } from '../MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useFetchMovies } from 'hooks/useFetchMovies';

export const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  return (
    <>
      {/* {error && <Heading />} */}
      {/* {isLoading && <Loader />} */}
      <h1>Trending today</h1>

      <MovieList movies={movies} />
    </>
  );
};
