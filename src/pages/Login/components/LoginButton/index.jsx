import React from "react";

import styles from "./index.module.scss";

const LoginButton = ({ children, ...props }) => {
  return (
    <button type="submit" className={styles.loginButton} {...props}>
      {children}
    </button>
  );
};

export default LoginButton;
