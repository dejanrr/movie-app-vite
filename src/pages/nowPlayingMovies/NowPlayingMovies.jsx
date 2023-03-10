import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { useNowPlayingMovies } from "../../services/movieServiceHooks";
import MovieGrid from "../../components/movieGrid/MovieGrid";

const NowPlayingMovies = () => {
  const { nowPlayingMoviesPage, setNowPlayingMoviesPage } =
    useContext(MovieContext);

  const { data: nowPlayingMovies, status } =
    useNowPlayingMovies(nowPlayingMoviesPage);

  useEffect(() => {
    document.title = "In Theaters";
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
        moviesArray={nowPlayingMovies}
        movieGridPage={nowPlayingMoviesPage}
        setMovieGridPage={setNowPlayingMoviesPage}
      />
    </>
  );
};

export default NowPlayingMovies;
