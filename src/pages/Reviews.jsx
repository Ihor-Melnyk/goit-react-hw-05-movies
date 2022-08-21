import { fetchReviewsMovie } from 'components/service/movie-service';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
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

  return (
    <div>
      {reviews.length ? (
        <ReviewsList reviews={reviews} />
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
};
