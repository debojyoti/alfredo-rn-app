export const setUserData = userData => {
  return {
    type: "SET_AUTH_DATA",
    payload: {
      auth: {
        token: "TOKEN"
      }
    }
  };
};

export const clearAuth = () => {
  return {
    type: "CLEAR_AUTH_DATA",
    payload: {}
  };
};
