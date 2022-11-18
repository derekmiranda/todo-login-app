import React, { useCallback, useState } from "react";

import Todo from "./components/Todo";

import styles from "./index.module.scss";

const TodosList = ({ todos = [], removeTodo }) => {
  const onRemove = useCallback((event) => {
    const removeId = event.target?.dataset.removeId;
    if (removeId) {
      removeTodo(removeId);
    }
  });

  const todoEls = todos.map((todo) => (
    <Todo key={todo.id} todo={todo} onRemove={onRemove} />
  ));

  return <ol className={styles.list}>{todoEls}</ol>;
};

export default TodosList;
