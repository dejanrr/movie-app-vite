import MovieCard from "../movieCard/MovieCard";
import Flickity from "react-flickity-component";
import "./flickity.css";
import "./carousel.css";
import PersonCard from "../personCard/PersonCard";

const Carousel = ({ moviesArray }) => {
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    cellAlign: "left",
    prevNextButtons: true,
    pageDots: true,
    freeScrollFriction: 0.2,
    selectedAttraction: 0.01,
    friction: 0.15,
    groupCells: "100%",
    resize: true,
    draggable: true,
  };

  return (
    <div className="carousel-container">
      <Flickity
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
      >
        {moviesArray?.results ? (
          <>
            {moviesArray?.results
              ? moviesArray?.results?.map((movie) => (
                  <div className="carousel-item">
                    <MovieCard key={movie.id} {...movie} movie={movie} />
                  </div>
                ))
              : "No results found"}
          </>
        ) : (
          <>
            {moviesArray?.cast
              ? moviesArray?.cast?.map((actor) => (
                  <div className="carousel-item">
                    <PersonCard {...actor} actor={actor} />
                  </div>
                ))
              : "No results found"}
          </>
        )}
      </Flickity>
    </div>
  );
};

export default Carousel;
