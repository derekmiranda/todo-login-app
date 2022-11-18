import React, { useCallback } from "react";

import Page from "/src/components/Page";
import LogoutButton from "./components/LogoutButton";
import InputWithIcon from "/src/components/InputWithIcon";
import useTodos from "/src/hooks/useTodos";

import styles from "./index.module.scss";
import TodosList from "./components/TodosList";

const TodosPage = ({ logout }) => {
  const { filter, updateFilter } = useTodos();

  const onFilterChange = useCallback((event) => {
    updateFilter(event.target.value);
  }, []);

  return (
    <Page>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
      <h1>My To-Do List</h1>
      <div className={styles.wrapper}>
        <div className={styles.topRow}>
          <InputWithIcon value={filter} onChange={onFilterChange} />
          <button className={styles.newBtn}>New</button>
        </div>
        <TodosList />
      </div>
    </Page>
  );
};

export default TodosPage;
