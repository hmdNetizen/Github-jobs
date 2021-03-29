import React, { useState } from "react";
import Card from "../utils/Card";
import { useSelector } from "react-redux";
import Spinner from "../utils/Spinner";
import { paginate } from "../utils/paginate";
import Pagination from "./Pagination";

const Jobs = () => {
  const loading = useSelector((state) => state.entities.loading);
  const jobs = useSelector((state) => state.entities.jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const jobsItem = paginate(jobs, currentPage, pageSize);

  return loading ? (
    <Spinner color="#4c5c90" />
  ) : (
    <ul className="main__content">
      {jobsItem.map((job) => (
        <Card key={job.id} details={job} />
      ))}

      <Pagination
        itemsCount={jobs.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </ul>
  );
};

export default Jobs;
