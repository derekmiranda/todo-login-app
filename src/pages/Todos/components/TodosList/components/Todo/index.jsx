import React, { useCallback, useRef } from "react";

import styles from "./index.module.scss";

const Todo = ({ todo, onRemove, onUpdate }) => {
  const inputRef = useRef(null);

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  return (
    <li className={styles.todo}>
      <input
        type="text"
        ref={inputRef}
        value={todo.task}
        className={styles.todo_input}
        onChange={onUpdate}
        data-update-id={todo.id}
      />
      <button onClick={focusInput}>Edit</button>
      <button data-remove-id={todo.id} onClick={onRemove}>
        Remove
      </button>
    </li>
  );
};

export default Todo;
