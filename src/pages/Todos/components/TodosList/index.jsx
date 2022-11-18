import React, { useCallback, useState } from "react";

import Todo from "./components/Todo";

import styles from "./index.module.scss";

const TodosList = ({ todos = [], addTodo }) => {
  const todoEls = todos.map((todo) => <Todo key={todo.id} todo={todo} />);

  return <ol className={styles.list}>{todoEls}</ol>;
};

export default TodosList;
