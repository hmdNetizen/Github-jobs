import * as actions from "./types";
import axios from "axios";

const baseURL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

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
    dispatch(jobRequestedFailed(error.message));
  }
};

export const jobsCityRequested = (city) => async (dispatch) => {
  jobsRequested();

  try {
    const response = await axios.get(baseURL, {
      params: {
        city,
      },
    });
    dispatch({
      type: actions.JOBS_CITY_CHANGED,
      payload: response.data,
    });
  } catch (error) {
    dispatch(jobRequestedFailed(error.message));
  }
};
