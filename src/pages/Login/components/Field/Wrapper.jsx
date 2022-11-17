import React from "react";

import styles from "./Wrapper.module.scss";

const FieldWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default FieldWrapper;
