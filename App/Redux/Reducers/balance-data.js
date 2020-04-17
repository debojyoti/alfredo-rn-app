export const balanceDataReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "UPDATE_BALANCE_DATA":
      newState = action.payload;
      break;
    case "CLEAR_BALANCE_DATA":
      newState = {};
      break;
    // default
  }
  return newState;
};
