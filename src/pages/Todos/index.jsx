import React, { useCallback, useEffect, useState } from "react";

import Page from "/src/components/Page";
import LogoutButton from "./components/LogoutButton";
import InputWithIcon from "/src/components/InputWithIcon";
import useTodos from "/src/hooks/useTodos";
import TodosList from "./components/TodosList";
import UpsertTodo from "./components/UpsertTodo";
import styles from "./index.module.scss";
import useUpsertTodo from "./components/UpsertTodo/useUpsertTodo";
import { getStorageItem, setStorageItem } from "/src/utils/storage";
import { TODOS_STORAGE_KEY } from "/src/constants";

const TodosPage = ({ logout }) => {
  const {
    allTodos,
    filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
    filter,
    updateFilter,
  } = useTodos(getStorageItem(TODOS_STORAGE_KEY, []));

  useEffect(() => {
    setStorageItem(TODOS_STORAGE_KEY, allTodos);
  }, [allTodos]);

  const todosListProps = {
    todos: filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
  };

  const { newTodo, onTodoChange, saveNewTodo, resetNewTodo } = useUpsertTodo({
    addTodo,
  });

  const [writingNewTodo, setWritingNewTodo] = useState(false);

  const toggleWritingNewTodo = useCallback(() => {
    if (writingNewTodo) {
      resetNewTodo();
    }
    setWritingNewTodo(!writingNewTodo);
  }, [writingNewTodo, resetNewTodo]);

  const saveAndResetState = useCallback(() => {
    updateFilter("");
    saveNewTodo();
  }, [saveNewTodo, updateFilter]);

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
            className={styles.search}
            placeholder="search"
            value={filter}
            onChange={onFilterChange}
          />
          <button className={styles.newBtn} onClick={toggleWritingNewTodo}>
            {writingNewTodo ? "Close" : "New"}
          </button>
        </div>
        {writingNewTodo && (
          <UpsertTodo
            task={newTodo}
            onChange={onTodoChange}
            onSave={saveAndResetState}
            onReset={resetNewTodo}
          />
        )}
        <TodosList {...todosListProps} />
      </div>
    </Page>
  );
};

export default TodosPage;
