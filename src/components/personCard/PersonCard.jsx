import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
/* import blankProfile from "../../assets/images/blankProfile.png"; */
import "./personCard.css";

const PersonCard = ({ profile_path, name, id }) => {
  const { IMG_API_500, onPersonSelect } = useContext(MovieContext);

  const handlePersonSelect = () => {
    onPersonSelect(id);
  };

  return (
    <Link to="/personinfo">
      <div onClick={handlePersonSelect} className="person-card-container">
        <img
          src={profile_path ? IMG_API_500 + profile_path : ""}
          className="person-card-image"
        />
        <div className="person-card-info">
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;
