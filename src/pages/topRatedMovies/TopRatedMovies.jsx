import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { useTopRatedMovies } from "../../services/movieServiceHooks";
import MovieGrid from "../../components/movieGrid/MovieGrid";
import Navbar from "../../components/navbar/Navbar";

const TopRatedMovies = () => {
  const { topRatedMoviesPage, setTopRatedMoviesPage } =
    useContext(MovieContext);

  const { data: topRatedMovies, status } =
    useTopRatedMovies(topRatedMoviesPage);

  useEffect(() => {
    document.title = "Top Rated Movies";
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
        moviesArray={topRatedMovies}
        movieGridPage={topRatedMoviesPage}
        setMovieGridPage={setTopRatedMoviesPage}
      />
    </>
  );
};

export default TopRatedMovies;
