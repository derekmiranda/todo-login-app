import { useState, useCallback, useMemo } from "react";

function useForm({ fields = {}, handleSubmit = () => Promise.resolve() } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const canSubmit = useMemo(() =>
    Object.values(fields).every((field) => !field.invalid, [fields])
  );

  const onSubmitForm = useCallback(
    async (event) => {
      event.preventDefault();
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

  return { data, loading, error, canSubmit, submitProps };
}

export default useForm;
