import { useReducer, type ReactNode } from "react";
import {
  AuthEngineContext,
  type AuthEngineAction,
  type AuthEngineState,
} from "./AuthEngineContext";

const initialAuthEngineState: AuthEngineState = {
  data: null,
  isLoading: false,
  error: null,
};

function authEngineReducer(
  state: AuthEngineState,
  action: AuthEngineAction,
): AuthEngineState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function AuthEngineProvider({ children }: { children: ReactNode }) {
  const [auth, dispatch] = useReducer(
    authEngineReducer,
    initialAuthEngineState,
  );

  return (
    <AuthEngineContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthEngineContext.Provider>
  );
}
