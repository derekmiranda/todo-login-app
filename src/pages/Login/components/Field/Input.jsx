import React from "react";

import styles from "./Input.module.scss";
import InputWithIcon from "../../../../components/InputWithIcon";

const FieldInput = ({ children, error = "", icon, ...props }) => {
  const inputWithIconProps = {
    icon,
    ...props,
  };

  return (
    <div className={styles.wrapper}>
      <InputWithIcon {...inputWithIconProps} />
      {error && <p className={styles.input_errorMsg}>{error}</p>}
    </div>
  );
};

export default FieldInput;
