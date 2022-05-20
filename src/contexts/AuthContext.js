import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);
  const [user, setUser] = useState();


  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function logout() {
    localStorage.removeItem("auth");
    setUser()
    setAuth()
  }

  function userData(userData) {
    setUser(userData);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, userData, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
