import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieList } from './MovieList/MovieList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const apiKEY = '0bd2f89e5997215ec06dea49692dc792';
  axios.defaults.baseURL = `https://api.themoviedb.org/3`;

  const getTrendingToday = async () => {
    const { data } = await axios.get(`/trending/movie/day?api_key=${apiKEY}`);
    // transformMoviesData(data);
    return data.results;
  };
  const transformMoviesData = data => {
    return data.map(data => data.results);
  };

  useEffect(() => {
    // if (movies !== null) {
    //   return;
    // }
    const fetchData = async () => {
      try {
        const data = await getTrendingToday();

        setMovies(data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  // console.log(movies);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        <MovieList movies={movies} />
      </ul>
    </>
  );
};
