import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonComp from "../../components/buttonComp/ButtonComp";
import { MdLocalMovies } from "react-icons/md";
import "./navbar.css";
/* import SearchDrawer from "../searchDrawer/SearchDrawer"; */
import MovieContext from "../../Context/MovieContext";

const Navbar = () => {
  const { setDrawerVisible } = useContext(MovieContext);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="logo">
            <div className="logo-image">
              <MdLocalMovies />
            </div>
            <div className="logo-text">True Film</div>
          </div>
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <NavLink to="popular">Popular</NavLink>
            </li>
            <li
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <NavLink to="toprated">Top Rated</NavLink>
            </li>
            <li
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <NavLink to="upcoming">Upcoming</NavLink>
            </li>
            <li
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <NavLink to="intheaters">In Theaters</NavLink>
            </li>
          </ul>
        </div>
        <div onClick={() => setDrawerVisible(true)} className="search">
          <ButtonComp buttonText="Search" />
        </div>
       {/*  <SearchDrawer /> */}
      </div>
    </nav>
  );
};

export default Navbar;
