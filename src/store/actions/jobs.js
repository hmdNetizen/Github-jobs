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

// export const jobsCityRequested = (city, full_time) => async (dispatch) => {
//   jobsRequested();

//   const cancelToken = axios.CancelToken.source();

//   try {
//     const response = await axios.get(baseURL, {
//       cancelToken: cancelToken.token,
//       params: {
//         city,
//         full_time,
//       },
//     });
//     dispatch({
//       type: actions.JOBS_CITY_CHANGED,
//       payload: response.data,
//     });
//   } catch (error) {
//     if (axios.isCancel(error)) return;
//     dispatch(jobRequestedFailed(error.message));
//   }

//   return () => {
//     cancelToken.cancel();
//   };
// };

export const searchedJobsReceived = (searched) => async (dispatch) => {
  jobsRequested();
  const cancelToken = axios.CancelToken.source();
  try {
    const response = await axios.get(baseURL, {
      cancelToken: cancelToken.token,
      params: {
        search: searched,
      },
    });
    dispatch({
      type: actions.SEARCHED_JOB_RECEIVED,
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
