import PropTypes from 'prop-types';
import noImage from '../../image/noImage.jpg';
import { MovieFlex, MovieColumn } from './Movie.styled';

const getPercentage = value => {
  return Math.floor(value * 10);
};

export const Movie = ({
  id,
  title,
  release_date,
  poster_path,
  genres,
  vote_average,
  overview,
}) => {
  return (
    <MovieFlex key={id}>
      <MovieColumn>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w400${poster_path}`
              : noImage
          }
          alt="title"
        />
      </MovieColumn>
      <MovieColumn>
        <h1>
          {title} {release_date && `(${release_date.slice(0, 4)})`}
        </h1>
        <p>User Score: {getPercentage(vote_average)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        {genres && (
          <>
            <h2>Genres</h2> <p> {genres.map(genre => genre.name).join(' ')}</p>
          </>
        )}
      </MovieColumn>
    </MovieFlex>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};
