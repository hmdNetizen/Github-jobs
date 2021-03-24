import * as actions from "./types";
export const apiCallBegan = () => (dispatch) => {
  dispatch({
    type: actions.API_CALL_BEGAN,
  });
};
