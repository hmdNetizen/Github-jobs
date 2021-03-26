import React from "react";
import Card from "../utils/Card";
import { useSelector } from "react-redux";
import Spinner from "./../utils/Spinner";

const Contents = () => {
  const loading = useSelector((state) => state.entities.loading);
  const jobs = useSelector((state) => state.entities.jobs);

  return loading ? (
    <Spinner color="#4c5c90" />
  ) : (
    <ul className="main__content">
      {jobs.map((job) => (
        <Card key={job.id} details={job} />
      ))}

      <div>Pagination Here</div>
    </ul>
  );
};

export default Contents;
