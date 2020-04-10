import { makePostRequest } from "../http-connectors";
import { BASE_URL } from "../configs";

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    makePostRequest(
      `${BASE_URL}/login`,
      false,
      { username, password }
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