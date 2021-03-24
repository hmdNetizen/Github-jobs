import * as actions from "./types";
import axios from "axios";

export const jobsRequested = () => (dispatch) => {
  dispatch({
    type: actions.JOBS_REQUESTED,
  });
};

export const jobsReceived = (description, full_time, location) => async (
  dispatch
) => {
  dispatch(jobsRequested());

  const baseURL =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

  try {
    const response = await axios.get(baseURL, {
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
    dispatch({
      type: actions.JOBS_REQUESTED_FAILED,
      payload: error.message,
    });
  }
};
