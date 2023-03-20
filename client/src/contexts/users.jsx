import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export function ProvideUser({ children }) {
  const [username, setUsername] = useState({ username: "" });
  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
}
