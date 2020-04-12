export const userDataReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_AUTH_DATA":
      console.log('action :', action);
      newState = action.payload;
      break;
    case "CLEAR_AUTH_DATA":
      newState = {};
      break;
    // default
  }
  return newState;
};
