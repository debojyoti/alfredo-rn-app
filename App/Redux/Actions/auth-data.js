export const setUserData = userData => {
  console.log('userData :', userData);
  return {
    type: "SET_AUTH_DATA",
    payload: {
      ...userData
    }
  };
};

export const clearAuth = () => {
  return {
    type: "CLEAR_AUTH_DATA",
    payload: {}
  };
};
