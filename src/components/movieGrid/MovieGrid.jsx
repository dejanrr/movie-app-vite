import MovieCard from "../movieCard/MovieCard";
import "./movieGrid.css";

const MovieGrid = ({ moviesArray, movieGridPage, setMovieGridPage }) => {
  return (
    <div className="movie-grid-container">
      <div className="movie-grid">
        {/* <div className="movie-grid-header">
          <div>Total page(s): {moviesArray.total_pages}</div>
          <div>Showing {moviesArray.total_results} result(s)</div>
        </div> */}
        <div className="movie-list">
          {moviesArray.results.map((movie) => (
            <MovieCard key={movie.id} {...movie} movie={movie} />
          ))}
        </div>
        <div className="grid-pagination">
          {typeof movieGridPage === "number" ? (
            <div>
              <button
                disabled={movieGridPage === 1}
                onClick={() => setMovieGridPage(movieGridPage - 1)}
              >
                Previous
              </button>
              <span>{movieGridPage}</span>
              <button
                disabled={movieGridPage === 500}
                onClick={() => setMovieGridPage(movieGridPage + 1)}
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieGrid;
