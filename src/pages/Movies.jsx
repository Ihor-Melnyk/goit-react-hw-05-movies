import { MovieList } from 'components/MovieList/MovieList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import useSearchMovies from 'hooks/useSearchMovies';
import { Outlet } from 'react-router-dom';
import { Section } from './MovieDetails.styled';

const MoviesPage = () => {
  const { movies, handleSubmit } = useSearchMovies();

  return (
    <Section>
      <SearchMovie onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
      <Outlet />
    </Section>
  );
};

export default MoviesPage;
