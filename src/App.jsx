import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import PopularMovies from "./pages/popularMovies/PopularMovies";
import TopRatedMovies from "./pages/topRatedMovies/TopRatedMovies";
import UpcomingMovies from "./pages/upcomingMovies/UpcomingMovies";
import NowPlayingMovies from "./pages/nowPlayingMovies/NowPlayingMovies";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import PersonInfo from "./pages/personInfo/PersonInfo";
import "./App.css";
import SearchDrawer from "./components/searchDrawer/SearchDrawer";
import Footer from "./components/footer/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SearchDrawer />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<PopularMovies />} />
          <Route path="toprated" element={<TopRatedMovies />} />
          <Route path="upcoming" element={<UpcomingMovies />} />
          <Route path="intheaters" element={<NowPlayingMovies />} />
          <Route path="movieinfo" element={<MovieInfo />} />
          <Route path="personinfo" element={<PersonInfo />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </div>
  );
};

export default App;
