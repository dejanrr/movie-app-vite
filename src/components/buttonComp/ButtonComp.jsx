import "./buttonComp.css";

const ButtonComp = ({ buttonText }) => {
  return (
    <button className="btn">
      <div>{buttonText}</div>
    </button>
  );
};

export default ButtonComp;
