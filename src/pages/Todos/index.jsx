import React, { useCallback, useState } from "react";

import Page from "/src/components/Page";
import LogoutButton from "./components/LogoutButton";
import InputWithIcon from "/src/components/InputWithIcon";
import useTodos from "/src/hooks/useTodos";
import TodosList from "./components/TodosList";
import UpsertTodo from "./components/TodosList/components/UpsertTodo";
import { MAX_TODO_LEN } from "/src/constants";
import styles from "./index.module.scss";

const TodosPage = ({ logout }) => {
  const {
    filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
    filter,
    updateFilter,
  } = useTodos();

  const todosListProps = {
    todos: filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
  };

  const [newTodo, setNewTodo] = useState("");

  const onTodoChange = useCallback((task) => {
    if (task.length <= MAX_TODO_LEN) {
      setNewTodo(task);
    }
  }, []);

  const saveNewTodo = useCallback(() => {
    addTodo(newTodo);
    resetNewTodo();
  }, [newTodo]);

  const resetNewTodo = useCallback(() => {
    setNewTodo("");
  }, []);

  const onFilterChange = useCallback((event) => {
    updateFilter(event.target.value);
  }, []);

  return (
    <Page>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
      <h1>My To-Do List</h1>
      <div className={styles.wrapper}>
        <div className={styles.topRow}>
          <InputWithIcon
            placeholder="search"
            value={filter}
            onChange={onFilterChange}
          />
          <button className={styles.newBtn}>New</button>
        </div>
        <UpsertTodo
          task={newTodo}
          onChange={onTodoChange}
          onSave={saveNewTodo}
          onReset={resetNewTodo}
        />
        <TodosList {...todosListProps} />
      </div>
    </Page>
  );
};

export default TodosPage;
