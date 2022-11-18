import React from "react";

import styles from "./index.module.scss";

const Todo = ({ todo, onRemove }) => {
  return (
    <li className={styles.todo}>
      <input type="text" value={todo.task} className={styles.todo_input} />
      <button>Edit</button>
      <button data-remove-id={todo.id} onClick={onRemove}>
        Remove
      </button>
    </li>
  );
};

export default Todo;
