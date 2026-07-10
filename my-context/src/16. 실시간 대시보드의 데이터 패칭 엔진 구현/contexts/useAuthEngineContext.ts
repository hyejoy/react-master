import { useContext } from "react";
import { AuthEngineContext } from "./AuthEngineContext";

export function useAuthEngineContext() {
  const context = useContext(AuthEngineContext);

  if (!context) {
    throw new Error(
      "useAuthEngineContext must be used within AuthEngineProvider",
    );
  }

  return context;
}
