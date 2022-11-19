import React, { useCallback, useRef, useState } from "react";

import { MAX_TODO_LEN } from "/src/constants";
import GhostButton from "/src/components/GhostButton";
import styles from "./index.module.scss";
import PencilIcon from "../../../Icons/Pencil";
import TrashIcon from "../../../Icons/Trash";

const Todo = ({ todo, onRemove, onUpdate }) => {
  const inputRef = useRef(null);
  const [tempTask, setTempTask] = useState(todo.task);

  const commitTask = useCallback(() => {
    if (tempTask) {
      onUpdate(todo.id, tempTask);
      return;
    }
    setTempTask(todo.task);
  }, [tempTask, onUpdate]);

  const onChange = useCallback((event) => {
    if (event.target.value.length <= MAX_TODO_LEN) {
      setTempTask(event.target.value);
    }
  }, []);

  const onKeyDown = useCallback(
    (event) => {
      if (
        (event.key === "Enter" || event.key === "Escape") &&
        inputRef.current
      ) {
        inputRef.current.blur();
      }
    },
    [inputRef.current]
  );

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
        value={tempTask}
        className={styles.todo_input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={commitTask}
      />
      <GhostButton onClick={focusInput} className={styles.todo_ghost}>
        <PencilIcon />
      </GhostButton>
      <GhostButton
        data-remove-id={todo.id}
        onClick={onRemove}
        className={styles.todo_ghost}
      >
        <TrashIcon className={styles.todo_svg} />
      </GhostButton>
    </li>
  );
};

export default Todo;
