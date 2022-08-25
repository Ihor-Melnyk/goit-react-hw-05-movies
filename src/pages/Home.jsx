import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { Section } from './MovieDetails.styled';

const Home = () => {
  const { movies, error, isLoading } = useFetchTrendingMovies();
  return (
    <Section>
      {error && console.log(error)}
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </Section>
  );
};

export default Home;
