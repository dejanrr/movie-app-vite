import { useContext } from "react";
import { Parallax } from "react-parallax";
import MovieContext from "../../Context/MovieContext";

const ParallaxComp = ({ data }) => {
  const { IMG_API_ORIGINAL } = useContext(MovieContext);

  return (
    <Parallax
      bgImage={
        data?.backdrops
          ? IMG_API_ORIGINAL + data?.backdrops[0]?.file_path
          : IMG_API_ORIGINAL + data?.results[0]?.media.backdrop_path
      }
      strength={500}
    >
      <div style={{ height: 1000 }}></div>
    </Parallax>
  );
};

export default ParallaxComp;
