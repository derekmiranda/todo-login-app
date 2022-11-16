import React from "react";
import LoginPage from "./Login";

import useAuth from "/src/hooks/useAuth";

const App = () => {
  const { loggedIn, login } = useAuth();
  return loggedIn ? <main>todos</main> : <LoginPage login={login} />;
};

export default App;
