import { useFetchReviews } from 'hooks/useFetchReviews';
import { ReviewsList } from './ReviewsList';

const Reviews = () => {
  const reviews = useFetchReviews();
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
export default Reviews;
