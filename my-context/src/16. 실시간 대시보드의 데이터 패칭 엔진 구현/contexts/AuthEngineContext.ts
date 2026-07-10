import { createContext, type Dispatch } from "react";

export type AuthData = {
  sales: number;
  order: number;
};

export type AuthEngineState = {
  data: AuthData | null;
  isLoading: boolean;
  error: string | null;
};

export type AuthEngineAction =
  | {
      type: "FETCH_START";
    }
  | {
      type: "FETCH_SUCCESS";
      payload: AuthData;
    }
  | {
      type: "FETCH_FAILURE";
      payload: string;
    };

export type AuthEngineContextValue = {
  auth: AuthEngineState;
  dispatch: Dispatch<AuthEngineAction>;
};

export const AuthEngineContext =
  createContext<AuthEngineContextValue | null>(null);
