import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { usePopularMovies } from "../../services/movieServiceHooks";
import MovieGrid from "../../components/movieGrid/MovieGrid";

const PopularMovies = () => {
  const { popularMoviesPage, setPopularMoviesPage } = useContext(MovieContext);

  const { data: popularMovies, status } = usePopularMovies(popularMoviesPage);

  useEffect(() => {
    document.title = "Popular Movies";
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <>
      <MovieGrid
        moviesArray={popularMovies}
        movieGridPage={popularMoviesPage}
        setMovieGridPage={setPopularMoviesPage}
      />
    </>
  );
};

export default PopularMovies;
