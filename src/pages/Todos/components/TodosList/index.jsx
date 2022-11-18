import React from "react";

import styles from "./index.module.scss";

const TodosList = ({ children, ...props }) => {
  return (
    <button className={styles.logoutButton} {...props}>
      {children}
    </button>
  );
};

export default TodosList;
