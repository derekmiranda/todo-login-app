import React, { useCallback } from "react";

import FieldWrapper from "./components/Field/Wrapper";
import FieldLabel from "./components/Field/Label";
import FieldInput from "./components/Field/Input";
import Page from "/src/components/Page";
import LoginButton from "./components/LoginButton";

import styles from "./index.module.scss";
import AccountIcon from "./components/Icons/Account";
import LockIcon from "./components/Icons/Lock";

export const FORM_ID = "login-form";

const LoginPage = () => {
  const onFormSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Page>
      <h1>Rapptr Labs</h1>
      <form id={FORM_ID} className={styles.form} onSubmit={onFormSubmit}>
        <FieldWrapper>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldInput id="email" name="email" icon={AccountIcon} />
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldInput
            type="password"
            id="password"
            name="password"
            icon={LockIcon}
          />
        </FieldWrapper>
        {/* TODO: use ... to indicate loading */}
        <LoginButton>Login</LoginButton>
      </form>
    </Page>
  );
};

export default LoginPage;
