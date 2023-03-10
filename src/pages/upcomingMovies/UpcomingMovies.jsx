import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { useUpcomingMovies } from "../../services/movieServiceHooks";
import MovieGrid from "../../components/movieGrid/MovieGrid";
import Navbar from "../../components/navbar/Navbar";

const UpcomingMovies = () => {
  const { upcomingMoviesPage, setUpcomingMoviesPage } =
    useContext(MovieContext);

  const { data: upcomingMovies, status } =
    useUpcomingMovies(upcomingMoviesPage);

  useEffect(() => {
    document.title = "Upcoming Movies";
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
        moviesArray={upcomingMovies}
        movieGridPage={upcomingMoviesPage}
        setMovieGridPage={setUpcomingMoviesPage}
      />
    </>
  );
};

export default UpcomingMovies;
