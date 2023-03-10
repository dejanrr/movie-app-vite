import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieRating from "../../components/movieRating/MovieRating";
import "./infoBox.css";
import ButtonComp from "../buttonComp/ButtonComp";
import parallaxWallpaper from "../../assets/images/parallaxWp.jpg";

import { BsFillPlayBtnFill } from "react-icons/bs";

const InfoBox = ({ infoBoxData }) => {
  const {
    setModalIsOpen,
    selectedMovie,
    selectedPerson,
    onPersonSelect,
    IMG_API_500,
    IMG_API_1280,
  } = useContext(MovieContext);

  return (
    <div className="info-box-container">
      <div className="info-box-wrapper">
        <div className="info-box-left">
          <img
            src={
              infoBoxData?.poster_path
                ? IMG_API_1280 + infoBoxData?.poster_path
                : IMG_API_1280 + infoBoxData?.profile_path
            }
            className="info-image"
            width="165px"
          />
          <div className="info-left-content">
            <div className="info-left-row info-title">
              {infoBoxData?.title ? infoBoxData?.title : infoBoxData?.name}
            </div>
            <div className="info-left-row">
              {infoBoxData?.title ? (
                <>
                  <span>{infoBoxData?.release_date.slice(0, 4)}</span> &nbsp;
                  &bull; &nbsp;
                  <span>{infoBoxData.runtime} min</span>
                </>
              ) : (
                <>{infoBoxData?.known_for_department}</>
              )}
            </div>
            {infoBoxData?.title ? (
              <div className="info-left-row">
                <div
                  onClick={() => setModalIsOpen(true)}
                  className="info-button"
                >
                  <ButtonComp
                    buttonText="Trailer"
                    buttonIcon={<BsFillPlayBtnFill />}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {infoBoxData?.birthday ? (
              <div className="info-left-row">
                {infoBoxData?.birthday.slice(0, 4)} -
                {infoBoxData?.deathday ? infoBoxData?.deathday : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="info-box-right">
          <div className="info-right">
            {infoBoxData?.title ? (
              <div className="info-rating">
                <MovieRating infoBoxData={infoBoxData} {...infoBoxData} />
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
