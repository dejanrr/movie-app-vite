import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import "./movieCard.css";

import { AiFillStar } from "react-icons/ai";

const MovieCard = ({
  title,
  vote_average,
  vote_count,
  poster_path,
  id,
  overview,
  release_date,
  runtime,
}) => {
  const { IMG_API_ORIGINAL, IMG_API_500, onMovieSelect } =
    useContext(MovieContext);

  const handleMovieSelect = () => {
    onMovieSelect(id);
  };

  return (
    <div onClick={handleMovieSelect} className="movie-card-container">
      <img
        src={IMG_API_500 + poster_path}
        alt={title}
        className="movie-poster"
        onClick={handleMovieSelect}
      />
      <div className="movie-over">
        <div className="movie-over-text">{overview}</div>
      </div>
      <div className="movie-card-info">
        <Link to="/movieinfo">
          <div className="movie-card-title">{title}</div>
        </Link>
        <div className="movie-card-rating">
          {vote_average}
          {/*        <AiFillStar /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
