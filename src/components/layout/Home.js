import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchField from "../formElements/SearchField";
import { jobsReceived, jobsCityRequested } from "../../store/actions/jobs";
import Aside from "./Aside";
import Contents from "./Contents";

const Home = () => {
  const [option, setOption] = useState({
    city: "New York",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsReceived("React", true, option.city));
    jobsReceived();
    jobsCityRequested(option.city);
  }, [dispatch, option]);

  console.log(option.city);
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
      <main className="main">
        <Aside setOption={setOption} option={option} />
        <Contents />
      </main>
    </Fragment>
  );
};

export default Home;
