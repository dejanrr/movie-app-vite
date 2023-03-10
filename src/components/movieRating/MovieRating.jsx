import "./movieRating.css";

const MovieRating = ({ vote_average }) => {
  const handleRatingColor = (vote_average) => {
    if (vote_average < 4) {
      return "#E90D00";
    } else if (vote_average < 7) {
      return "#FF851B";
    } else {
      return "#28B62C";
    }
  };

  return (
    <div
      style={{ backgroundColor: handleRatingColor(vote_average) }}
      className="movie-rating"
    >
      <div>{vote_average.toFixed(1)} </div>
    </div>
  );
};

export default MovieRating;
