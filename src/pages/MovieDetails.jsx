import { useState, useEffect } from 'react';
import { fetchMovie } from 'components/service/movie-service';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { Movie } from 'components/Movie/Movie';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movie = await fetchMovie(movieId);
        setMovie(movie);
      } catch (error) {
        console.error(error);
      }
    };
    getMovie();
  }, [movieId]);

  const {
    id,
    poster_path,
    genres,
    overview,
    title,
    release_date,
    vote_average,
  } = movie;

  return (
    <div key={id}>
      <div>
        <Link to={goBackLink}>Go back</Link>
      </div>
      <Movie
        id={id}
        poster_path={poster_path}
        genres={genres}
        overview={overview}
        title={title}
        release_date={release_date}
        vote_average={vote_average}
      />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`cast`} state={{ from: goBackLink }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} state={{ from: goBackLink }}>
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
