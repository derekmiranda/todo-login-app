import { useState, useCallback } from "react";

function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = useCallback(() => setLoggedIn(true), []);
  const logout = useCallback(() => setLoggedIn(false), []);
  return { loggedIn, login, logout };
}

export default useAuth;
