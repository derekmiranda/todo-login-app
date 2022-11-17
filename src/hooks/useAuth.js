import { useState, useCallback } from "react";

function useAuth() {
  // TODO: revert back to false
  const [loggedIn, setLoggedIn] = useState(true);
  const login = useCallback(() => setLoggedIn(true), []);
  const logout = useCallback(() => setLoggedIn(false), []);
  return { loggedIn, login, logout };
}

export default useAuth;
