import { useState, useCallback } from "react";

function useForm({ fields = {}, handleSubmit = () => Promise.resolve() } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const canSubmit = Object.values(fields).every((field) => !field.invalid);
      if (!canSubmit || loading) return;

      setLoading(true);
      try {
        const result = await handleSubmit();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [fields, loading]
  );

  const submitProps = {
    onSubmit,
  };

  return { data, loading, error, submitProps };
}

export default useForm;
