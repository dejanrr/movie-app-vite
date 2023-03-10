import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { useMovieVideos } from "../../services/movieServiceHooks";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    height: "60%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    display: "flex",
    flexDirection: "column",
    justifyContet: "center",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#343434",
    borderRadius: '0',
    border: "none",
  },

  overlay: {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
  },
};

const Popup = () => {
  const { modalIsOpen, setModalIsOpen, selectedMovie } =
    useContext(MovieContext);

  const { data: movieVideos, status } = useMovieVideos(selectedMovie);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="modal-container">
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Trailer"
      >
        {movieVideos?.results
          ? movieVideos.results.map((video) => (
              <div className="movie-video-box">
                {video.type == "Trailer" ? (
                  <iframe
                    width="900"
                    height="500"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                ) : (
                  ""
                )}
              </div>
            ))
          : "No trailers found"}
      </Modal>
    </div>
  );
};

export default Popup;
