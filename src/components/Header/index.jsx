import React from "react";

import styles from "./index.module.scss";

const Header = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;
