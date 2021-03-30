import Input from "./Input";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const SearchField = ({
  searchText,
  setSearchText,
  jobsReceived,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();

  const handleSearchedText = (e) => setSearchText(e.target.value);

  const handleFormSearch = (e) => {
    e.preventDefault();

    if (searchText !== "") {
      dispatch(jobsReceived(searchText));
    } else {
      alert("Please type in something");
    }

    setSearchText("");
    setCurrentPage(1);
  };

  return (
    <form className="form" onSubmit={handleFormSearch}>
      <Input
        className="form__input"
        placeholder="Title, companies, expertise, benefits"
        value={searchText}
        onChange={handleSearchedText}
      />
      <button type="submit" className="form__submit">
        Search
      </button>
      <span className="material-icons form__inputIcon">work_outline</span>
    </form>
  );
};

SearchField.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  jobReceived: PropTypes.func,
  setCurrentPage: PropTypes.func.isRequired,
};

export default SearchField;
