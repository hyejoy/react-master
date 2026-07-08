import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("authContext Error!");
  if (typeof context === "string") throw new Error("default value");

  return context;
}
