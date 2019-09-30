import axios from "axios";

const authenticationApi = axios.create({
  baseURL: "/auth"
});

export const signUp = ({ email, username, password }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/signup", { email, username, password })
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/login", { email, password })
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signOut = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/logout")
      .then(response => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const verify = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .get("/verify")
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
