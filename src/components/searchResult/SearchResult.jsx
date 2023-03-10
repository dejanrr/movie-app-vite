import "./searchResult.css";
import { AiFillStar } from "react-icons/ai";

const SearchResult = ({ title, vote_average }) => {
  return (
    <div className="search-result">
      <div className="search-result-title">{title}</div>
      <div className="search-result-rating">
        {vote_average}
        <AiFillStar />
      </div>
    </div>
  );
};

export default SearchResult;
