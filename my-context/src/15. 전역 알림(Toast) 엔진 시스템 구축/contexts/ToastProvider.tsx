import { useReducer, type ReactNode } from "react";
import { ToastContext, type Toast, type ToastAction } from "./ToastContext";

function toastReducer(state: Toast[], action: ToastAction) {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, { id: Date.now(), message: action.payload.message }];
    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.payload.id);
    default:
      return state;
  }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={{ toasts, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
}
