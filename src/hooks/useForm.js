import { useState, useCallback } from "react";

function useForm({ fields = {}, handleSubmit = () => Promise.resolve() } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmitForm = useCallback(
    async (event) => {
      event.preventDefault();
      const canSubmit = Object.values(fields).every((field) => !field.invalid);
      if (!canSubmit || loading) return;
      setLoading(true);
      try {
        const { data } = await handleSubmit();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [fields, loading]
  );

  const resetState = useCallback(() => {
    if (!loading) {
      setData(null);
      setError("");
    }
  }, [loading]);

  const submitProps = {
    onSubmit: onSubmitForm,
    onChange: resetState,
  };

  return { data, loading, error, submitProps };
}

export default useForm;
