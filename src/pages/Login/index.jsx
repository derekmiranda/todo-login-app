import React, { useCallback } from "react";

import FieldWrapper from "./components/Field/Wrapper";
import FieldLabel from "./components/Field/Label";
import FieldInput from "./components/Field/Input";
import Page from "/src/components/Page";
import LoginButton from "./components/LoginButton";

import styles from "./index.module.scss";
import AccountIcon from "./components/Icons/Account";
import LockIcon from "./components/Icons/Lock";
import useFormField from "../../hooks/useFormField";
import { validateEmail, validatePassword } from "../../validators";

export const FORM_ID = "login-form";

const LoginPage = () => {
  const { error: emailErrorMsg, inputProps: emailProps } = useFormField({
    validate: validateEmail,
  });
  const { error: passwordErrorMsg, inputProps: passwordProps } = useFormField({
    validate: validatePassword,
  });
  const onFormSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Page>
      <h1>Rapptr Labs</h1>
      <form id={FORM_ID} className={styles.form} onSubmit={onFormSubmit}>
        <FieldWrapper>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldInput
            id="email"
            name="email"
            placeholder="user@rapptrlabs.com"
            icon={AccountIcon}
            error={emailErrorMsg}
            {...emailProps}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldInput
            type="password"
            id="password"
            name="password"
            placeholder="Must be at least 4 characters"
            icon={LockIcon}
            error={passwordErrorMsg}
            {...passwordProps}
          />
        </FieldWrapper>
        {/* TODO: use ... to indicate loading */}
        <LoginButton>Login</LoginButton>
      </form>
    </Page>
  );
};

export default LoginPage;
