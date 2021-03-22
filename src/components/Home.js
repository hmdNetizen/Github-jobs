import { Fragment } from "react";
import React from "react";
import SearchField from "./formElements/SearchField";

const Home = () => {
  return (
    <Fragment>
      <header className="header">
        <h1 className="header__title">
          Github <span className="header__thin">Jobs</span>
        </h1>
      </header>
      <section>
        <SearchField />
      </section>
    </Fragment>
  );
};

export default Home;
