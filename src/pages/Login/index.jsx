import React, { useCallback, useEffect } from "react";

import FieldWrapper from "./components/Field/Wrapper";
import FieldLabel from "./components/Field/Label";
import FieldInput from "./components/Field/Input";
import Page from "/src/components/Page";
import Header from "/src/components/Header";
import LoginButton from "./components/LoginButton";

import styles from "./index.module.scss";
import AccountIcon from "./components/Icons/Account";
import LockIcon from "./components/Icons/Lock";
import useFormField from "../../hooks/useFormField";
import { validateEmail, validatePassword } from "../../validators";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../api/login";

export const FORM_ID = "login-form";

const LoginPage = ({ login }) => {
  const emailFormField = useFormField({
    validate: validateEmail,
  });
  const passwordFormField = useFormField({
    validate: validatePassword,
  });
  const { error: emailErrorMsg, inputProps: emailProps } = emailFormField;
  const { error: passwordErrorMsg, inputProps: passwordProps } =
    passwordFormField;

  const handleSubmit = useCallback(
    () => validateLogin(emailProps.value, passwordProps.value),
    [emailProps.value, passwordProps.value]
  );

  const { data, loading, error, submitProps } = useForm({
    fields: {
      email: emailFormField,
      password: passwordFormField,
    },
    handleSubmit,
  });

  // login if login validation successful
  useEffect(() => {
    if (data) {
      login();
    }
  }, [data]);

  return (
    <Page>
      <Header />
      <h1>Rapptr Labs</h1>
      <form
        id={FORM_ID}
        name={FORM_ID}
        className={styles.form}
        {...submitProps}
      >
        <FieldWrapper>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldInput
            id="email"
            name="email"
            placeholder="user@rapptrlabs.com"
            icon={AccountIcon}
            error={emailErrorMsg}
            disabled={loading}
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
            disabled={loading}
            {...passwordProps}
          />
        </FieldWrapper>
        {/* TODO: use ... to indicate loading */}
        <LoginButton disabled={loading || !!error}>
          {loading ? "..." : "Login"}
        </LoginButton>
        {error && <p className={styles.form_error}>{error}</p>}
      </form>
    </Page>
  );
};

export default LoginPage;
