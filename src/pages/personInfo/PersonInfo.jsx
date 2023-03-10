import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import InfoBox from "../../components/infoBox/InfoBox";
import ParallaxComp from "../../components/parallaxComp/ParallaxComp";
import {
  usePersonImages,
  usePersonInfo,
} from "../../services/movieServiceHooks";
import "./personInfo.css";

const PersonInfo = () => {
  const { selectedPerson } = useContext(MovieContext);

  const { data: personInfo } = usePersonInfo(selectedPerson);
  const { data: images } = usePersonImages(selectedPerson);

  useEffect(() => {
    document.title = `${personInfo?.name}`;
    console.log(personInfo);
  }, []);

  return (
    <div className="person-info-page">
      <ParallaxComp data={images} />
      <InfoBox infoBoxData={personInfo} />
      <div className="person-info-container">
        <div className="person-info-wrapper">
          <section>
            <table className="person-details-table">
              {personInfo?.birthday != null ? (
                <>
                  <tr className="person-details-table-row">
                    <td className="person-details-table-data">
                      <strong>Born:</strong>
                    </td>
                    <td className="person-details-table-data">
                      {personInfo?.birthday?.slice(8, 10)}.
                      {personInfo?.birthday?.slice(5, 7)}.
                      {personInfo?.birthday?.slice(0, 4)}.
                    </td>
                  </tr>
                </>
              ) : (
                ""
              )}
              {personInfo?.deathday != null ? (
                <>
                  <tr className="person-details-table-row">
                    <td className="person-details-table-data">
                      <strong>Died:</strong>
                    </td>
                    <td className="person-details-table-data">
                      {personInfo?.deathday?.slice(8, 10)}.
                      {personInfo?.deathday?.slice(5, 7)}.
                      {personInfo?.deathday?.slice(0, 4)}.
                    </td>
                  </tr>
                </>
              ) : (
                ""
              )}
              {personInfo?.place_of_birth != null ? (
                <>
                  <tr className="person-details-table-row">
                    <td className="person-details-table-data">
                      <strong>Birthplace:</strong>
                    </td>
                    <td className="person-details-table-data">
                      {personInfo?.place_of_birth}
                    </td>
                  </tr>
                </>
              ) : (
                ""
              )}
              {personInfo?.deathday ? (
                <tr className="person-details-table-row">
                  <td className="person-details-table-data">
                    <strong>Birthplace:</strong>
                  </td>
                  <td className="person-details-table-data">
                    {personInfo?.place_of_birth}
                  </td>
                </tr>
              ) : (
                ""
              )}
            </table>
          </section>
          <section>
            <h1 className="section-heading">
              <span className="sharp">#</span>Biography
            </h1>
            <div>{personInfo?.biography}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
