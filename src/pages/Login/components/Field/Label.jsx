import React from "react";

import styles from "./Label.module.scss";

const FieldLabel = ({ children, ...props }) => {
  return (
    <label className={styles.label} {...props}>
      {children}
    </label>
  );
};

export default FieldLabel;
