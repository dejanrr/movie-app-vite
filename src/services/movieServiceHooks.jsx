import { useQuery } from "react-query";

import { fetchPopularMovies } from "./movieService.jsx";
import { fetchTopRatedMovies } from "./movieService.jsx";
import { fetchUpcomingMovies } from "./movieService.jsx";
import { fetchNowPlayingMovies } from "./movieService.jsx";
import { fetchMovieInfo } from "./movieService.jsx";
import { fetchMovieImages } from "./movieService.jsx";
import { fetchMovieVideos } from "./movieService.jsx";
import { fetchPersonImages } from "./movieService.jsx";
import { fetchActors } from "./movieService.jsx";
import { fetchWatchProvides } from "./movieService.jsx";
import { fetchSimilarMovies } from "./movieService.jsx";
import { fetchMovieReviews } from "./movieService.jsx";
import { fetchPersonInfo } from "./movieService.jsx";
/* import { fetchSearchData } from "./movieService.jsx"; */

export const usePopularMovies = (popularMoviesPage, isPreviousData) => {
  return useQuery(
    ["popular-movies", popularMoviesPage],
    () => fetchPopularMovies(popularMoviesPage),
    {
      keepPreviousData: true,
    }
  );
};

export const useTopRatedMovies = (topRatedMoviesPage, isPreviousData) => {
  return useQuery(
    ["top-rated-movies", topRatedMoviesPage],
    () => fetchTopRatedMovies(topRatedMoviesPage),
    {
      keepPreviousData: true,
    }
  );
};

export const useUpcomingMovies = (upcomingMoviesPage, isPreviousData) => {
  return useQuery(
    ["upcoming-movies", upcomingMoviesPage],
    () => fetchUpcomingMovies(upcomingMoviesPage),
    {
      keepPreviousData: true,
    }
  );
};

export const useNowPlayingMovies = () => {
  return useQuery(["now-playing-movies"], () => fetchNowPlayingMovies());
};

export const useMovieInfo = (selectedMovie) => {
  return useQuery(["movie-info", selectedMovie], () =>
    fetchMovieInfo(selectedMovie)
  );
};

export const useMovieImages = (selectedMovie) => {
  return useQuery(["images", selectedMovie], () =>
    fetchMovieImages(selectedMovie)
  );
};

export const useMovieVideos = (selectedMovie) => {
  return useQuery(["movie-videos", selectedMovie], () =>
    fetchMovieVideos(selectedMovie)
  );
};

export const useSimilarMovies = (selectedMovie) => {
  return useQuery(["similar-movies", selectedMovie], () =>
    fetchSimilarMovies(selectedMovie)
  );
};

export const useMovieReviews = (selectedMovie) => {
  return useQuery(["movie-reviews", selectedMovie], () =>
    fetchMovieReviews(selectedMovie)
  );
};

export const useActors = (selectedMovie) => {
  return useQuery(["actors", selectedMovie], () => fetchActors(selectedMovie));
};

export const useWatchProvides = (selectedMovie) => {
  return useQuery(["watch-providers", selectedMovie], () =>
    fetchWatchProvides(selectedMovie)
  );
};

export const usePersonInfo = (selectedPerson) => {
  return useQuery(["person-info", selectedPerson], () =>
    fetchPersonInfo(selectedPerson)
  );
};

export const usePersonImages = (selectedPerson) => {
  return useQuery(["person-images", selectedPerson], () =>
    fetchPersonImages(selectedPerson)
  );
};
/* 
export const useSearchData = (searchQuery) => {
  return useQuery(["search-query", searchQuery], () =>
    fetchSearchData(searchQuery)
  );
};
 */