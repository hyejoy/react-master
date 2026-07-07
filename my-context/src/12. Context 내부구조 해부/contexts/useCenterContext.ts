import { useContext } from "react";
import { CenterContext } from "./CenterContext";

export function useCenterContext() {
  const context = useContext(CenterContext);

  if (!context) {
    throw new Error("useCenterContext must be used within CenterProvider");
  }

  return context;
}
