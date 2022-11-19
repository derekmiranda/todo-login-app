import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const InputWithIcon = ({ children, className, icon: Icon, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {Icon && <Icon className={styles.icon} />}
      <input
        type="text"
        className={classNames(
          styles.input,
          {
            [styles.input__hasIcon]: !!Icon,
          },
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputWithIcon;
