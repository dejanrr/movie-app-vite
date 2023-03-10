import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import {
  useMovieInfo,
  useMovieImages,
  useActors,
  useMovieReviews,
  useSimilarMovies,
} from "../../services/movieServiceHooks";
import ParallaxComp from "../../components/parallaxComp/ParallaxComp";
import Popup from "../../components/popup/Popup";
import InfoBox from "../../components/infoBox/InfoBox";
import MovieCard from "../../components/movieCard/MovieCard";
import PersonCard from "../../components/personCard/PersonCard";
import MovieReview from "../../components/movieReview/MovieReview";
import "./movieInfo.css";
import Carousel from "../../components/carousel/Carousel";

const MovieInfo = () => {
  const { selectedMovie } = useContext(MovieContext);

  const { data: movieInfo } = useMovieInfo(selectedMovie);
  const { data: similarMovies } = useSimilarMovies(selectedMovie);
  const { data: movieReviews } = useMovieReviews(selectedMovie);
  const { data: images } = useMovieImages(selectedMovie);
  const { data: actors } = useActors(selectedMovie);

  useEffect(() => {
    document.title = `${movieInfo?.title} (${movieInfo?.release_date?.slice(
      0,
      4
    )})`;
  }, []);

  return (
    <div className="movie-info-page">
      <ParallaxComp data={images} />
      <InfoBox infoBoxData={movieInfo} />
      <Popup />
      <div className="movie-info-container">
        <div className="movie-info-wrapper">
          <section>
            <h1 className="section-heading">
              <span className="sharp">#</span>Synopsis
            </h1>
            <div>{movieInfo?.overview}</div>
          </section>
          <section>
            <table className="movie-details-table">
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Original name:</strong>
                </td>
                <td className="movie-details-table-data">
                  {movieInfo?.original_title ? movieInfo?.original_title : ""}
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Language:</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.spoken_languages?.length
                      ? movieInfo?.spoken_languages.map((language) => (
                          <li className="table-cell-li">{language.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Status:</strong>
                </td>
                <td className="movie-details-table-data">
                  {movieInfo?.status}
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Genre:</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.genres?.length
                      ? movieInfo?.genres.map((genre) => (
                          <li className="table-cell-li">{genre.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Budget:</strong>
                </td>
                <td className="movie-details-table-data">
                  <strong>{movieInfo?.budget}$</strong>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Box office:</strong>
                </td>
                <td className="movie-details-table-data">
                  <strong>{movieInfo?.revenue}$</strong>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Country</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.production_countries?.length
                      ? movieInfo?.production_countries.map((country) => (
                          <li className="table-cell-li">{country.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Production</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.production_companies?.length
                      ? movieInfo?.production_companies.map((company) => (
                          <li className="table-cell-li">{company.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
            </table>
          </section>
          <section>
            <h1 className="section-heading">
              <span className="sharp">#</span>Cast
            </h1>
            <div className="cast-row">
              <Carousel moviesArray={actors} />
            </div>
          </section>
          <section>
            <h1 className="section-heading">
              <span className="sharp">#</span>Similar Movies
            </h1>
            <div className="similar-movies-row">
              <Carousel moviesArray={similarMovies} />
            </div>
          </section>
          <section>
            <h1 className="section-heading">
              <span className="sharp">#</span>Reviews
            </h1>
            {movieReviews?.results
              ? movieReviews.results.map((review) => (
                  <MovieReview review={review} />
                ))
              : ""}
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
