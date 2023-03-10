import { useContext } from "react";
import ButtonComp from "../../components/buttonComp/ButtonComp.jsx";
import HomeSlider from "../../components/homeSlider/HomeSlider.jsx";
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import MovieContext from "../../Context/MovieContext.jsx";
import {
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../../services/movieServiceHooks";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const { popularMoviesPage, topRatedMoviesPage, upcomingMoviesPage } =
    useContext(MovieContext);

  const { data: popularMovies, status } = usePopularMovies(popularMoviesPage);
  const { data: topRatedMovies } = useTopRatedMovies(topRatedMoviesPage);
  const { data: upcomingMovies } = useUpcomingMovies(upcomingMoviesPage);

  return (
    <div className="homepage">
      <HomeSlider />
      <main>
        <div className="main-content">
          <section className="trending">
            <h1 className="section-heading">
              <span className="sharp">#</span>Trending
            </h1>
            <div className="section-image-row">
              {popularMovies
                ? popularMovies.results
                    .slice(4, 8)
                    .map((movie) => <MovieCard movie={movie} {...movie} />)
                : ""}
            </div>
            <Link to="popular">
              <div className="section-button">
                <ButtonComp buttonText="View All" />
              </div>
            </Link>
          </section>
          <section className="trending">
            <h1 className="section-heading">
              <span className="sharp">#</span>Top Rated
            </h1>
            <div className="section-image-row">
              {topRatedMovies
                ? topRatedMovies.results
                    .slice(0, 4)
                    .map((movie) => <MovieCard movie={movie} {...movie} />)
                : ""}
            </div>
            <Link to="toprated">
              <div className="section-button">
                <ButtonComp buttonText="View All" />
              </div>
            </Link>
          </section>
          <section className="trending">
            <h1 className="section-heading">
              <span className="sharp">#</span>Upcoming
            </h1>
            <div className="section-image-row">
              {upcomingMovies
                ? upcomingMovies.results
                    .slice(4, 8)
                    .map((movie) => <MovieCard movie={movie} {...movie} />)
                : ""}
            </div>
            <Link to="upcoming">
              <div className="section-button">
                <ButtonComp buttonText="View All" />
              </div>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
