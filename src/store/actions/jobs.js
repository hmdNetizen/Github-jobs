import * as actions from "./types";
import axios from "axios";

// https://cors-anywhere.herokuapp.com/

const baseURL = "https://jobs.github.com/positions.json";

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
    dispatch({
      type: actions.JOBS_RECEIVED,
      payload: response.data,
    });
  } catch (error) {
    if (axios.isCancel(error)) return;
    dispatch(jobRequestedFailed(error.message));
  }

  return () => {
    cancelToken.cancel();
  };
};
