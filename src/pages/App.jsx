import React from "react";
import LoginPage from "./Login";
import TodosPage from "./Todos";

import useAuth from "/src/hooks/useAuth";

const App = () => {
  const { loggedIn, login, logout } = useAuth();
  return loggedIn ? <TodosPage logout={logout} /> : <LoginPage login={login} />;
};

export default App;
