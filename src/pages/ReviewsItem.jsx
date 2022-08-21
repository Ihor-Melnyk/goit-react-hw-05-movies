export const ReviewsItem = ({ review }) => {
  const { author, content } = review;

  return (
    <>
      <p>Author: {author}</p>
      <p>{content}</p>
    </>
  );
};
