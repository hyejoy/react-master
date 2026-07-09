import { createContext, type Dispatch } from "react";

export type Toast = {
  id: number;
  message: string;
};

export type ToastAction =
  | {
      type: "ADD_TOAST";
      payload: Pick<Toast, "message">;
    }
  | {
      type: "REMOVE_TOAST";
      payload: Pick<Toast, "id">;
    };

export type ToastContextValue = {
  toasts: Toast[];
  dispatch: Dispatch<ToastAction>;
};

export const ToastContext = createContext<ToastContextValue | null>(null);
