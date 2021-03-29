import * as actions from "../actions/types";

const initialState = {
  jobs: [],
  loading: true,
  job: null,
  errors: null,
  isEmptyJobs: false,
};
const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.JOBS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case actions.JOBS_RECEIVED:
      return {
        ...state,
        loading: false,
        jobs: payload,
        errors: null,
        isEmptyJobs: false,
      };
    case actions.JOB_DETAILS_RETRIEVED:
      return {
        ...state,
        loading: false,
        job: payload,
        errors: null,
      };
    case actions.JOBS_REQUESTED_EMPTY:
      return {
        ...state,
        isEmptyJobs: true,
        loading: false,
        errors: null,
      };
    case actions.JOBS_REQUESTED_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default jobsReducer;
