import React from "react";
import Input from "./Input";

const SearchField = () => {
  return (
    <form className="form">
      <Input />
      <button type="submit" className="form__submit">
        Search
      </button>
      <span className="material-icons form__inputIcon">work_outline</span>
    </form>
  );
};

export default SearchField;
