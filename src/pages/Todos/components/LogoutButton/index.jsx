import React from "react";

import styles from "./index.module.scss";

const LogoutButton = ({ children, ...props }) => {
  return (
    <button className={styles.logoutButton} {...props}>
      {children}
    </button>
  );
};

export default LogoutButton;
