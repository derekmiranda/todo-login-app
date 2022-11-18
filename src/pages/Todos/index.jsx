import React from "react";

import Page from "/src/components/Page";

import styles from "./index.module.scss";
import LogoutButton from "./components/LogoutButton";

const TodosPage = ({ logout }) => {
  return (
    <Page>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
      <h1>My To-Do List</h1>
      <div className={styles.wrapper}></div>
    </Page>
  );
};

export default TodosPage;
