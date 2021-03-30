import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchField from "../formElements/SearchField";
import { jobsReceived } from "../../store/actions/jobs";
import Aside from "./Aside";
import Jobs from "./Jobs";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [isFullTime, setIsFullTime] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [option, setOption] = useState("");

  const loading = useSelector((state) => state.entities.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsReceived("JavaScript", isFullTime, option));
  }, [dispatch, option, isFullTime]);

  return (
    <Fragment>
      <Header
        header="header"
        headerTitle="header__title"
        headerThin="header__thin"
      />
      <section>
        <SearchField
          searchText={searchText}
          setSearchText={setSearchText}
          jobsReceived={jobsReceived}
          setCurrentPage={setCurrentPage}
        />
      </section>
      <main className="main__section">
        <Aside
          option={option}
          setCurrentPage={setCurrentPage}
          setOption={setOption}
          isFullTime={isFullTime}
          setIsFullTime={setIsFullTime}
          filterText={filterText}
          setFilterText={setFilterText}
        />
        <Jobs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
      {!loading && <Footer />}
    </Fragment>
  );
};

export default Home;
