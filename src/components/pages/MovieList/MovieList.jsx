export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <a href="#">{movie.original_title}</a>
        </li>
      ))}
    </>
  );
};
