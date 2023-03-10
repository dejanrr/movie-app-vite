import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import ButtonComp from "../buttonComp/ButtonComp";
import "./homeSliderItem.css";

const HomeSliderItem = ({ image, sliderCardInfo, actors }) => {
  const { IMG_API_ORIGINAL } = useContext(MovieContext);

  return (
    <div className="home-slider-item">
      <img
        src={IMG_API_ORIGINAL + image?.file_path}
        className="home-slider-image"
      />
      {/*    <div className="home-slider-item-info-card-container">
     <div className="home-slider-item-info-card">
          <div className="home-slider-item-info-card-wrapper">
            <div className="home-slider-item-info-card-left">
              <div className="home-slider-item-info-card-title">
                {sliderCardInfo?.title}
              </div>
              <div className="home-slider-item-info-card-date-and-runtime">
                ({sliderCardInfo?.release_date?.slice(0, 4)}){" "}
                {sliderCardInfo?.runtime} min
              </div>
              <div className="home-slider-item-info-card-actors-array">
                {actors?.cast
                  ? actors?.cast?.slice(0, 4).map((actor) => <> {actor.name}</>)
                  : ""}
              </div>
            </div>
            <div className="home-slider-item-info-card-right">
              <div className="home-slider-item-info-card-synopsis">
                {sliderCardInfo?.overview}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeSliderItem;
