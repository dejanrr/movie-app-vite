const API_BASE = "https://api.themoviedb.org/3/";

import axios from "axios";

export async function fetchPopularMovies(popularMoviesPage) {
  const response = await fetch(
    `${API_BASE}movie/popular?api_key=22255a1d03be2922b50e977230a4adaa&page=${popularMoviesPage}`
  );
  return response.json();
}

export async function fetchTopRatedMovies(topRatedMoviesPage) {
  const response = await fetch(
    `${API_BASE}movie/top_rated?api_key=22255a1d03be2922b50e977230a4adaa&page=${topRatedMoviesPage}`
  );
  return response.json();
}

export async function fetchUpcomingMovies(upcomingMoviesPage) {
  const response = await fetch(
    `${API_BASE}movie/upcoming?api_key=22255a1d03be2922b50e977230a4adaa&page=${upcomingMoviesPage}`
  );
  return response.json();
}

export async function fetchNowPlayingMovies() {
  const response = await fetch(
    `${API_BASE}movie/now_playing?api_key=22255a1d03be2922b50e977230a4adaa&page=1`
  );
  return response.json();
}

export async function fetchMovieInfo(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

export async function fetchMovieImages(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}/images?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

export async function fetchMovieVideos(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}/videos?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

export async function fetchSimilarMovies(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}/similar?api_key=22255a1d03be2922b50e977230a4adaa&page=1`
  );
  return response.json();
}

export async function fetchMovieReviews(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}/reviews?api_key=22255a1d03be2922b50e977230a4adaa&page=1`
  );
  return response.json();
}

export async function fetchActors(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}/credits?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

export async function fetchWatchProvides(selectedMovie) {
  const response = await fetch(
    `${API_BASE}movie/${selectedMovie}/watch/providers?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

export async function fetchPersonInfo(selectedPerson) {
  const response = await fetch(
    `${API_BASE}person/${selectedPerson}?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

export async function fetchPersonImages(selectedPerson) {
  const response = await fetch(
    `${API_BASE}person/${selectedPerson}/tagged_images?api_key=22255a1d03be2922b50e977230a4adaa`
  );
  return response.json();
}

/* export async function fetchSearchData(searchQuery) {
  const response = await fetch(
    `${API_BASE}search/movie?api_key=22255a1d03be2922b50e977230a4adaa&query=${searchQuery}`
  );
  return response.json();
}
 */

export default {
  getSearchData: (searchQuery) => {
    const url = `${API_BASE}search/movie?api_key=22255a1d03be2922b50e977230a4adaa&query=`;
    return axios.get(url + searchQuery).then((info) => info.data);
  },
};
