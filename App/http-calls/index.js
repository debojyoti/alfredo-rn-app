import { makePostRequest } from "../http-connectors";
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