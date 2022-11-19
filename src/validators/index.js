// validators return string for error message if invalid
// otherwise, they return an empty string

// borrowed from: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s01.html
const EMAIL_REGEX =
  /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
const MAX_EMAIL_CHARS = 50;
const MIN_PASSWORD_CHARS = 4;
const MAX_PASSWORD_CHARS = 16;

export const validateEmail = (password) => {
  if (!EMAIL_REGEX.test(password)) {
    return "Not a valid email";
  } else if (password.length > MAX_EMAIL_CHARS) {
    return `Must be at most ${MAX_EMAIL_CHARS} characters`;
  }
  return "";
};

export const validatePassword = (password) => {
  if (password.length < MIN_PASSWORD_CHARS) {
    return `Must be at least ${MIN_PASSWORD_CHARS} characters`;
  } else if (password.length > MAX_PASSWORD_CHARS) {
    return `Must be at most ${MAX_PASSWORD_CHARS} characters`;
  }
  return "";
};
