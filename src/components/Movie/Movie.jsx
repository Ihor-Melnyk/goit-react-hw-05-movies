const noImage = '../../image/noImage.jpg';
const getPercentage = value => {
  return Math.floor(value * 10);
};

export const Movie = ({
  id,
  original_title,
  release_date,
  poster_path,
  genres,
  vote_average,
  overview,
}) => {
  return (
    <>
      <div key={id}>
        <h1>
          {original_title} {release_date && `(${release_date.slice(0, 4)})`}
        </h1>
        <p>User Score: {getPercentage(vote_average)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>

        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noImage
          }
          alt="original_title"
        />

        {genres && (
          <>
            <h2>Genres</h2> <p> {genres.map(genre => genre.name).join(' ')}</p>
          </>
        )}
      </div>
    </>
  );
};
