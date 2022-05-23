import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  const [auth, setAuth] = useState(persistedAuth);
  const [user, setUser] = useState(persistedUser);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function userData(userData) {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    setUser();
    setAuth();
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, userData, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
