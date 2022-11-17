import { useState, useCallback } from "react";

const defaultValidate = () => "";

function useFormField({ validate = defaultValidate } = {}) {
  const [value, setValue] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const error = validate(value);

  const onChange = useCallback((event) => {
    const val = event.target.value;
    if (!val) {
      setShowValidation(false);
    }
    setValue(val);
  }, []);

  const onBlur = useCallback(() => {
    setShowValidation(true);
  }, [value]);

  const inputProps = {
    value,
    onChange,
    onBlur,
  };

  return { invalid: !!error, error: showValidation ? error : "", inputProps };
}

export default useFormField;
