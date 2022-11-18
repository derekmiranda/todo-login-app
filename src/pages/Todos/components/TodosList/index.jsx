import React from "react";
import Todo from "./components/Todo";

import styles from "./index.module.scss";

const TEST_TODOS = [
  { id: 1, message: "do code" },
  { id: 2, message: "drink coffee" },
];

const TodosList = ({ todos = TEST_TODOS }) => {
  const todoEls = todos.map((todo) => <Todo key={todo.id} todo={todo} />);

  return <ol className={styles.list}>{todoEls}</ol>;
};

export default TodosList;
