import { useContext } from "react";
import {
  ProductDispatchContext,
  ProductStateContext,
} from "./ProductStateContext";

export function useProductStateContext() {
  const context = useContext(ProductStateContext);
  if (!context) throw new Error("error");

  return context;
}

export function useProductDispatchContext() {
  const context = useContext(ProductDispatchContext);
  if (!context) throw new Error("error!");

  return context.dispatch;
}
