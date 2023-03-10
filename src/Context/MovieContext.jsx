import { useState, createContext } from "react";

import Api from "../services/movieService";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [selectedMovie, onMovieSelect] = useState();
  const [selectedPerson, onPersonSelect] = useState();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState();

  const [movieInfo, setMovieInfo] = useState();
  const [personInfo, setPersonInfo] = useState();

  const [popularMoviesPage, setPopularMoviesPage] = useState(1);
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState(1);
  const [upcomingMoviesPage, setUpcomingMoviesPage] = useState(1);

  const [actors, setActors] = useState();
  const [crew, setCrew] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieReviews, setMovieReviews] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [similarMovies, setSimilarMovies] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [fullCrewOpen, setFullCrewOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      Api.getSearchData(searchQuery).then((data) => {
        setSearchResults(data);
        console.log(data);
      });
      setSearchQuery("");
    }
  };

  const IMG_API_300 = "https://image.tmdb.org/t/p/w300";
  const IMG_API_500 = "https://image.tmdb.org/t/p/w500";
  const IMG_API_1280 = "https://image.tmdb.org/t/p/w1280";
  const IMG_API_ORIGINAL = "https://image.tmdb.org/t/p/original";

  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        onMovieSelect,
        selectedPerson,
        onPersonSelect,
        searchQuery,
        setSearchQuery,
        movieInfo,
        setMovieInfo,
        personInfo,
        setPersonInfo,

        popularMoviesPage,
        setPopularMoviesPage,
        topRatedMoviesPage,
        setTopRatedMoviesPage,
        upcomingMoviesPage,
        setUpcomingMoviesPage,

        searchResults,
        setSearchResults,

        actors,
        setActors,
        crew,
        setCrew,
        movieVideos,
        setMovieVideos,
        movieReviews,
        setMovieReviews,
        movieCredits,
        setMovieCredits,
        similarMovies,
        setSimilarMovies,

        handleSubmit,

        modalIsOpen,
        setModalIsOpen,
        drawerVisible,
        setDrawerVisible,
        fullCrewOpen,
        setFullCrewOpen,

        IMG_API_300,
        IMG_API_500,
        IMG_API_1280,
        IMG_API_ORIGINAL,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
