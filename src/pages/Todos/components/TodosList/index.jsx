import React, { useCallback, useState } from "react";

import Todo from "./components/Todo";

import styles from "./index.module.scss";

const TodosList = ({ todos = [], updateTodo, removeTodo }) => {
  const onUpdate = useCallback(
    (event) => {
      const updateId = event.target?.dataset.updateId;
      if (updateId) {
        updateTodo(updateId, event.target.value);
      }
    },
    [updateTodo]
  );

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
    <Todo key={todo.id} todo={todo} onUpdate={onUpdate} onRemove={onRemove} />
  ));

  return <ol className={styles.list}>{todoEls}</ol>;
};

export default TodosList;
