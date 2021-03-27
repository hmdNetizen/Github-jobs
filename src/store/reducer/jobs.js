import * as actions from "../actions/types";

const initialState = {
  jobs: [],
  loading: true,
  job: null,
  errors: null,
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
      };
    case actions.JOB_DETAILS_RETRIEVED:
      return {
        ...state,
        loading: false,
        job: payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
