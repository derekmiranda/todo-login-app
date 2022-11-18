import React, { useCallback } from "react";

import { MAX_TODO_LEN } from "/src/constants";

import styles from "./index.module.scss";

const UpsertTodo = ({ task, onChange, onSave }) => {
  const canSave = task.length > 0 && task.length <= MAX_TODO_LEN;

  const handleChange = useCallback((event) => {
    onChange(event.target.value);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Enter") {
      onSave();
    }
  }, []);

  return (
    <div className={styles.upsert}>
      <input
        type="text"
        value={task}
        className={styles.upsert_input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSave} disabled={!canSave}>
        Save
      </button>
    </div>
  );
};

export default UpsertTodo;
