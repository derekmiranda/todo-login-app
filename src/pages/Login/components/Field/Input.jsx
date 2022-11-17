import React from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

const FieldInput = ({ children, icon: Icon, error = "", ...props }) => {
  return (
    <div className={styles.wrapper}>
      {Icon && <Icon className={styles.icon} />}
      <input
        type="text"
        className={classNames(styles.input, {
          [styles.input__hasIcon]: !!Icon,
        })}
        {...props}
      />
      {error && <p className={styles.input_errorMsg}>{error}</p>}
    </div>
  );
};

export default FieldInput;
