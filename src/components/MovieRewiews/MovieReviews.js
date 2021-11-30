import PropTypes from "prop-types";
import s from "./MovieReviews.module.scss";

export default function MovieReviews({ reviews }) {
  return (
    <ul className={s.listReview}>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieReviews.propTypes = {
  reviews: PropTypes.array,
};
