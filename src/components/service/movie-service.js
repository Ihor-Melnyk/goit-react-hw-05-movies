import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const apiKEY = '0bd2f89e5997215ec06dea49692dc792';
   

export const fetchTrendingToday = async () => {
    const { data } = await axios.get(`/trending/movie/day?api_key=${apiKEY}`);
    return data.results;
};
  
export const fetchMovie = async (id) => {
    const { data } = await axios.get(`/movie/${id}?api_key=${apiKEY}&language=en-US`);
    return data;
};
  
export const fetchActorsMovie = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${apiKEY}&language=en-US`);
    return data;
};

export const fetchReviewsMovie = async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${apiKEY}&language=en-US&page=1`);
    return data;
};
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1