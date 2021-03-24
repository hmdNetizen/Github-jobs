import * as actions from "../actions/types";

const initialState = {
  jobs: [],
  loading: true,
  job: null,
  errors: null,
};
const jobsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.API_CALL_BEGAN:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default jobsReducer;
