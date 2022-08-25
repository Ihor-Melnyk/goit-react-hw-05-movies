import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';

const Home = () => {
  const { movies, error, isLoading } = useFetchTrendingMovies();
  return (
    <>
      {error && console.log(error)}
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
