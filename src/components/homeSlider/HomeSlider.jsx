import {
  useMovieInfo,
  useMovieImages,
  useActors,
} from "../../services/movieServiceHooks";
import Flickity from "react-flickity-component";
import "./homeSliderFlickity.css";
import "./homeSlider.css";
import HomeSliderItem from "../homeSliderItem/HomeSliderItem";
import ButtonComp from "../../components/buttonComp/ButtonComp";

const HomeSlider = () => {
  const flickityOptions = {
    freeScroll: false,
    contain: true,
    cellAlign: "left",
    prevNextButtons: true,
    pageDots: false,
    freeScrollFriction: 0.2,
    selectedAttraction: 0.01,
    friction: 0.15,
    groupCells: "100%",
    autoPlay: 3500,
    resize: true,
    draggable: false,
  };

  const { data: firstSliderInfo, status } = useMovieInfo(438631);
  const { data: secondSliderInfo } = useMovieInfo(854239);
  const { data: thirdSliderInfo } = useMovieInfo(505642);
  const { data: fourthSliderInfo } = useMovieInfo(536554);

  const { data: firstSliderMovieCast } = useActors(438631);
  const { data: secondSliderMovieCast } = useActors(854239);
  const { data: thirdSliderMovieCast } = useActors(505642);
  const { data: fourthSliderMovieCast } = useActors(536554);

  const { data: firstSliderImage } = useMovieImages(438631);
  const { data: secondSliderImage } = useMovieImages(854239);
  const { data: thirdSliderImage } = useMovieImages(505642);
  const { data: fourthSliderImage } = useMovieImages(536554);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div className="home-slider">
      <Flickity
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <HomeSliderItem
          image={firstSliderImage?.backdrops[5]}
          sliderCardInfo={firstSliderInfo}
          actors={firstSliderMovieCast}
        />
        <HomeSliderItem
          image={secondSliderImage?.backdrops[5]}
          sliderCardInfo={secondSliderInfo}
          actors={secondSliderMovieCast}
        />
        <HomeSliderItem
          image={thirdSliderImage?.backdrops[1]}
          sliderCardInfo={thirdSliderInfo}
          actors={thirdSliderMovieCast}
        />
        <HomeSliderItem
          image={fourthSliderImage?.backdrops[1]}
          sliderCardInfo={fourthSliderInfo}
          actors={fourthSliderMovieCast}
        />
      </Flickity>
    </div>
  );
};

export default HomeSlider;
