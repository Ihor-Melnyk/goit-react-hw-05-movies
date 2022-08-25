import { fetchReviewsMovie } from 'components/service/movie-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getReviews = async () => {
      const data = fetchReviewsMovie(movieId);
      data.then(res => setReviews(res.results));
    };

    getReviews();
  }, [movieId]);
  return reviews;
};
