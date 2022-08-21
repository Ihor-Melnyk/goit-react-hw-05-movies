import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useFetchMovies } from 'hooks/useFetchMovies';
// import { Heading } from 'components';

export const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  return (
    <>
      {
        error && console.log(error)
        // < Heading />
      }
      {isLoading && <Loader />}
      <h1>Trending today</h1>

      <MovieList movies={movies} />
    </>
  );
};
