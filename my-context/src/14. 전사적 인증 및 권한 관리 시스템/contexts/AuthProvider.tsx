import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleLogin = () => setIsLogin((prev) => !prev);
  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  const value = { isLogin, toggleLogin, isAdmin, toggleAdmin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
