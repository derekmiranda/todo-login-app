import React, { useCallback, useState } from "react";

import Todo from "./components/Todo";

import styles from "./index.module.scss";

const TodosList = ({ todos = [], updateTodo, removeTodo }) => {
  const onRemove = useCallback(
    (event) => {
      const removeId = event.target?.dataset.removeId;
      if (removeId) {
        removeTodo(removeId);
      }
    },
    [removeTodo]
  );

  const todoEls = todos.map((todo) => (
    <Todo key={todo.id} todo={todo} onUpdate={updateTodo} onRemove={onRemove} />
  ));

  return <ol className={styles.list}>{todoEls}</ol>;
};

export default TodosList;
