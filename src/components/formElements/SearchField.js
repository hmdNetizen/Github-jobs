import React from "react";
import Input from "./Input";

const SearchField = () => {
  return (
    <form className="form">
      <Input
        className="form__input"
        placeholder="Title, companies, expertise, benefits"
      />
      <button type="submit" className="form__submit">
        Search
      </button>
      <span className="material-icons form__inputIcon">work_outline</span>
    </form>
  );
};

export default SearchField;
