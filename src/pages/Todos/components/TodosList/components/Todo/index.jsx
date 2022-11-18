import React from "react";

import styles from "./index.module.scss";

const Todo = ({ todo }) => {
  return (
    <li className={styles.todo}>
      <input type="text" value={todo.message} className={styles.todo_input} />
      <button>Edit</button>
      <button>Remove</button>
    </li>
  );
};

export default Todo;
