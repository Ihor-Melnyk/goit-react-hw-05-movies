import PropTypes from 'prop-types';

export const ReviewsItem = ({ review }) => {
  const { author, content } = review;

  return (
    <>
      <p>Author: {author}</p>
      <p>{content}</p>
    </>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
