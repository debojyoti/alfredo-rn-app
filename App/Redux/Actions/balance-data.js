import { getSystemBalanceForActive, getSystemBalanceForNotActive } from "../../http-calls";
import { sleepTime } from "../../helper-methods";

export const fetchBalanceDataFromServer = (isActive) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let balance = null
        if (isActive) {
          balance = await getSystemBalanceForActive();
        } else {
          balance = await getSystemBalanceForNotActive();
        }
        dispatch(updateBalanceData(balance));
        await sleepTime(500);
        resolve();
      } catch (error) {
        // No Data fetched!
        reject(error);
      }
    });
	}
};

export const updateBalanceData = balance => {
  return {
    type: "UPDATE_BALANCE_DATA",
    payload: {
      ...balance
    }
  };
};

export const clearBalanceData = () => {
  return {
    type: "CLEAR_BALANCE_DATA",
    payload: {}
  };
};
