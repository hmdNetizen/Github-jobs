import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchField from "../formElements/SearchField";
import { jobsReceived } from "../../store/actions/jobs";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsReceived());
    jobsReceived();
  }, [dispatch]);
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
