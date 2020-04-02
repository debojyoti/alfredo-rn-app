import { START_LOADING, STOP_LOADING, START_SOFT_LOADING, STOP_SOFT_LOADING } from "../actions-types";

export const showLoader = () => {
  return {
    type: START_LOADING
  };
};

export const hideLoader = () => {
  return {
    type: STOP_LOADING
  };
};

export const showSoftLoader = () => {
  return {
    type: START_SOFT_LOADING
  };
};

export const hideSoftLoader = () => {
  return {
    type: STOP_SOFT_LOADING
  };
};