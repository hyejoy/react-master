import { createContext } from "react";

export type AuthContextValue = {
  isAdmin: boolean;
  isLogin: boolean;
  toggleLogin: () => void;
  toggleAdmin: () => void;
};

export const AuthContext = createContext<AuthContextValue | string>(
  "로그인 정보가 없습니다.",
);
