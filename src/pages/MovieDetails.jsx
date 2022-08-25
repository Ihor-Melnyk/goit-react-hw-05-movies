import { Movie } from 'components/Movie/Movie';
import { useDetails } from 'hooks/useDetails';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Section, List } from './MovieDetails.styled';

const MovieDetailsPage = () => {
  const {
    id,
    poster_path,
    genres,
    overview,
    title,
    release_date,
    vote_average,
  } = useDetails();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  return (
    <>
      <Section key={id}>
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
      </Section>
      <Section>
        <h2>Additional information</h2>
        <List>
          <Link to={`cast`} state={{ from: goBackLink }}>
            Cast
          </Link>
          <Link to={`reviews`} state={{ from: goBackLink }}>
            Reviews
          </Link>
        </List>
        <Outlet />
      </Section>
    </>
  );
};
export default MovieDetailsPage;

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};
