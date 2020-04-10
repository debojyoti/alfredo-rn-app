export const userDataReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_USER_DATA":
      newState = action.payload;
      break;
    case "CLEAR_AUTH_DATA":
      newState = {};
      break;
    // default
  }
  return newState;
};
