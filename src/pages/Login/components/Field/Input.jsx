import React from "react";

import styles from "./Input.module.scss";

const FieldInput = ({ children, ...props }) => {
  return <input type="text" className={styles.input} {...props} />;
};

export default FieldInput;
