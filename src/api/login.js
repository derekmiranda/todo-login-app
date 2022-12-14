import axios from "axios";

import getLoginErrorMessage from "./getLoginErrorMessage";

const LOGIN_API_URL = "https://dev.rapptrlabs.com/Tests/scripts/user-login.php";

export const validateLogin = (email, password) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return axios
    .post(LOGIN_API_URL, formData, {
      validateStatus: function (status) {
        return status < 400;
      },
    })
    .then((response) => ({ data: response.data }))
    .catch((error) => {
      throw getLoginErrorMessage(error);
    });
};
