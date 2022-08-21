import { useState, useEffect } from 'react';
import { fetchMovie } from 'components/service/movie-service';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Movie } from 'components/Movie/Movie';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  // const noImage = '../../image/noImage.jpg';

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
    original_title,
    release_date,
    vote_average,
  } = movie;
  // console.log(movie);
  return (
    <div key={id}>
      <div>
        <Link to={goBackLink}>back to movies</Link>
      </div>
      <Movie
        id={id}
        poster_path={poster_path}
        genres={genres}
        overview={overview}
        original_title={original_title}
        release_date={release_date}
        vote_average={vote_average}
      />
    </div>
  );
};
