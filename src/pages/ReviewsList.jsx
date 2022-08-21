import { ReviewsItem } from './ReviewsItem';

export const ReviewsList = ({ reviews }) => {
  if (!reviews) {
    return;
  }
  return (
    reviews &&
    reviews.map(review => <ReviewsItem review={review} key={review.id} />)
  );
};
