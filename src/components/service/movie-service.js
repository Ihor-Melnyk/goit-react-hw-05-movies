import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const apiKEY = '0bd2f89e5997215ec06dea49692dc792';
   
// export const fetchTrendingToday = async () => {
//     const { data } = await axios.get(`/trending/movie/day?api_key=${apiKEY}`);
//     // transformMoviesData(data);
//     return data.results;
// };

export const fetchTrendingToday = async () => {
    return  await axios.get(`/trending/movie/day?api_key=${apiKEY}`);
    // transformMoviesData(data);
     
};
  
export const fetchMovie = async (id) => {
    const { data } = await axios.get(`/movie/${id}?api_key=${apiKEY}&language=en-US`);
    // transformMoviesData(data);
    return data;
};
  


  // const transformMoviesData = data => {
  //   return data.map(data => data.results);
  // };