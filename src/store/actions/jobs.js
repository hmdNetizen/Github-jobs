import * as actions from "./types";
import axios from "axios";

// https://cors-anywhere.herokuapp.com/https://jobs.github.com

const baseURL = "/positions.json";

export const jobsRequested = () => (dispatch) => {
  dispatch({
    type: actions.JOBS_REQUESTED,
  });
};

const jobRequestedFailed = (error) => (dispatch) => {
  dispatch({
    type: actions.JOBS_REQUESTED_FAILED,
    payload: error,
  });
};

export const jobsRequestedEmpty = () => (dispatch) => {
  dispatch({
    type: actions.JOBS_REQUESTED_EMPTY,
  });
};

export const jobsReceived = (description, full_time, location) => async (
  dispatch
) => {
  dispatch(jobsRequested());

  const cancelToken = axios.CancelToken.source();
  try {
    const response = await axios.get(baseURL, {
      cancelToken: cancelToken.token,
      params: {
        description,
        full_time,
        location,
      },
    });
    if (response.data.length > 0) {
      dispatch({
        type: actions.JOBS_RECEIVED,
        payload: response.data,
      });
    } else {
      dispatch(jobsRequestedEmpty());
    }
  } catch (error) {
    if (axios.isCancel(error)) return;
    dispatch(jobRequestedFailed(error.message));
  }

  return () => {
    cancelToken.cancel();
  };
};

export const jobDetailsRetrieved = (id) => async (dispatch) => {
  dispatch(jobsRequested());

  try {
    const response = await axios.get(`/positions/${id}.json?markdown=true`);

    dispatch({
      type: actions.JOB_DETAILS_RETRIEVED,
      payload: response.data,
    });
  } catch (error) {
    dispatch(jobRequestedFailed(error.message));
  }
};
