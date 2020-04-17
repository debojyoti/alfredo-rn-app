import { makePostRequest, makeGetRequest } from "../http-connectors";
import { BASE_URL } from "../configs";

export const login = loginData => {
  return new Promise((resolve, reject) => {
    makePostRequest(
      `${BASE_URL}/authentication`,
      false,
      loginData
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};

export const getSystemBalanceForActive = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest(
      `${BASE_URL}/system/balance`,
      false,
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};

export const getSystemBalanceForNotActive = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest(
      `${BASE_URL}/system/balance`,
      false,
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};