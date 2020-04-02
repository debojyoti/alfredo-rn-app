import { START_LOADING, STOP_LOADING, START_SOFT_LOADING, STOP_SOFT_LOADING } from "../action-types";

const initialState = {
  isLoading: false,
  isSoftLoading: false
};

export const loaderReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case START_LOADING:
      newState["isLoading"] = true;
      break;
    case STOP_LOADING:
      newState["isLoading"] = false;
      break;
    case START_SOFT_LOADING:
      newState["isSoftLoading"] = true;
      break;
    case STOP_SOFT_LOADING:
      newState["isSoftLoading"] = false;
      break;
  }
  return newState;
};
