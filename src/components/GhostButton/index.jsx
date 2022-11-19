import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const GhostButton = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.ghost, className)} {...props}>
      {children}
    </button>
  );
};

export default GhostButton;
