import { useContext } from "react";
import MovieContext from "../../Context/MovieContext";
/* import IMDB from "../../assets/images/IMDBlogo.png"; */
import "./movieReview.css";

const MovieReview = ({ review }) => {
  const { IMG_API_300 } = useContext(MovieContext);

  return (
    <div className="movie-review">
      <div className="movie-review-left">
        <div>
          <img
            src={IMG_API_300 + review.author_details.avatar_path}
            className="movie-review-author-avatar"
          />
        </div>
      </div>
      <div className="movie-review-right">
        <div className="movie-review-content">
          <div className="movie-review-author-name">
            {review.author}
            {review.author_details.rating}
          </div>

          <div className="movie-review-details">
            {review.created_at.slice(8, 10)}.{review.created_at.slice(5, 7)}.
            {review.created_at.slice(0, 4)}
          </div>
          <div className="movie-review-text">{review.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieReview;
