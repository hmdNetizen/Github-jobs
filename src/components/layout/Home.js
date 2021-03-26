import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchField from "../formElements/SearchField";
import { jobsReceived } from "../../store/actions/jobs";
import Aside from "./Aside";
import Contents from "./Contents";

const Home = () => {
  const [isFullTime, setIsFullTime] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");

  const [option, setOption] = useState({
    city: "New York",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsReceived("React", isFullTime, option.city));
  }, [dispatch, option.city, isFullTime]);

  return (
    <Fragment>
      <header className="header">
        <h1 className="header__title">
          Github <span className="header__thin">Jobs</span>
        </h1>
      </header>
      <section>
        <SearchField
          searchText={searchText}
          setSearchText={setSearchText}
          jobsReceived={jobsReceived}
        />
      </section>
      <main className="main">
        <Aside
          setOption={setOption}
          isFullTime={isFullTime}
          setIsFullTime={setIsFullTime}
          filterText={filterText}
          setFilterText={setFilterText}
        />
        <Contents />
      </main>
    </Fragment>
  );
};

export default Home;
