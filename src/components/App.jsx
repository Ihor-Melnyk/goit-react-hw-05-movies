import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Header = lazy(() =>
  import('./Header/Header' /* webpackChunkName: "Header" */)
);
const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */));

const MoviesPage = lazy(
  () => import('../pages/Movies') /* webpackChunkName: "Movies" */
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetails' /* webpackChunkName: "MovieDetailsPage" */)
);
const Cast = lazy(() =>
  import('../pages/Cast' /* webpackChunkName: "MovieDetails" */)
);
const Reviews = lazy(() =>
  import('../pages/Reviews' /* webpackChunkName: "MovieDetails" */)
);

export const App = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
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
    </Suspense>
  );
};
