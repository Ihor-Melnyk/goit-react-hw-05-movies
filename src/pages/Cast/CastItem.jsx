import PropTypes from 'prop-types';

export const CastItem = ({ actor }) => {
  const { name, character, profile_path } = actor;

  return (
    <>
      <p>Actor: {name}</p>
      <p>Character: {character}</p>

      <img
        src={profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
        width="150px"
      />
    </>
  );
};

CastItem.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
