import Input from "./Input";
import { useDispatch } from "react-redux";
import { searchedJobsReceived } from "../../store/actions/jobs";

const SearchField = ({ searchText, setSearchText }) => {
  const dispatch = useDispatch();

  const handleSearchedText = (e) => setSearchText(e.target.value);

  const handleFormSearch = (e) => {
    e.preventDefault();

    if (searchText !== "") {
      dispatch(searchedJobsReceived(searchText));
    } else {
      alert("Please type in something");
    }
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

export default SearchField;
