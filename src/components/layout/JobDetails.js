import React, { useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jobDetailsRetrieved } from "../../store/actions/jobs";
import Header from "./Header";
import Markdown from "markdown-to-jsx";
import getDays from "./../utils/getDays";
import Spinner from "../utils/Spinner";
import Footer from "./Footer";

const JobDetails = () => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.entities.job);
  const loading = useSelector((state) => state.entities.loading);

  const { jobId } = useParams();

  useEffect(() => {
    dispatch(jobDetailsRetrieved(jobId));
  }, [jobId, dispatch]);

  return (
    <Fragment>
      <Header
        header="header"
        headerTitle="header__title header__title--small"
        headerThin="header__thin"
      />
      {loading ? (
        <Spinner color="#4c5c90" />
      ) : (
        job !== null && (
          <div className="jobDetails">
            <aside className="jobDetails__aside">
              <Link className="jobDetails__link" to="/">
                <span className="material-icons jobDetails__arrow__icon">
                  arrow_right_alt
                </span>
                <span className="jobDetails__arrow__text">Back to search</span>
              </Link>
              <div className="jobDetails__aside__info">
                <h4>How to apply</h4>
                <Markdown>{job.how_to_apply}</Markdown>
              </div>
            </aside>
            <main className="jobDetails__overview">
              <div className="jobDetails__title__wrapper">
                <h2 className="jobDetails__title">{job.title}</h2>
                <p className="jobDetails__type">{job.type}</p>
              </div>
              <div className="jobDetails__time">
                <span className="material-icons jobDetails__icon">
                  schedule
                </span>
                <p className="jobDetails__time__text">
                  {`${getDays(job.created_at)} days ago`}
                </p>
              </div>
              <div className="jobDetails__brand">
                <img
                  src={job.company_logo}
                  alt="logo"
                  className="jobDetails__logo"
                />
                <div className="jobDetails__company">
                  <h5 className="jobDetails__company__name">{job.company}</h5>
                  <div className="jobDetails__location">
                    <span className="material-icons jobCard__icon">public</span>
                    <p className="jobDetails__caption">{job.location}</p>
                  </div>
                </div>
              </div>
              <div className="jobDetails__description">
                <Markdown className="jobDetails__description__text">
                  {job.description}
                </Markdown>
              </div>
            </main>
          </div>
        )
      )}
      {!loading && <Footer />}
    </Fragment>
  );
};

export default JobDetails;
