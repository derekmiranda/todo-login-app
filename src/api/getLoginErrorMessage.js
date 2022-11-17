// err: AxiosError
function getLoginErrorMessage(err) {
  if (err.response.status === 401) {
    return "Invalid email/password combination";
  } else {
    return "Something went wrong. Please try again";
  }
}

export default getLoginErrorMessage;
