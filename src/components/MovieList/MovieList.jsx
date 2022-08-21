import { Link, useLocation } from 'react-router-dom';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(({ id, title }) => (
        <div key={id} state={{ from: location }}>
          <Link to={`movies/${id}`}>{title}</Link>
        </div>
      ))}
    </>
  );
};
