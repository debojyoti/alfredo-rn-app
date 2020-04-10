import { store } from "../Redux/store";

/**
 *
 * Checks for auth token in auth state & storage
 *
 */
export const getToken = () => {
  return new Promise((resolve, reject) => {
    let token = null;
    const oldState = store.getState();
    const state = { ...oldState };
    // Try to get token from state
    if (
      state &&
      state.userData &&
      state.userData["auth"] &&
      state.userData["auth"]["token"]
    ) {
      token = state.userData["auth"]["token"];
    }
    resolve(token);
  });
};
