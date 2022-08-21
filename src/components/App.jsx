import { Routes, Route, Navigate } from 'react-router-dom';
// import { Layout } from './Layout';
import { MoviesPage } from '../pages/Movies';
import { Reviews } from '../pages/Reviews';
import { MovieDetailsPage } from '../pages/MovieDetails';
import { Home } from '../pages/Home';
import { Cast } from '../pages/Cast';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
