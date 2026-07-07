import { createContext } from "react";

export type CenterContextValue = {
  lostItems: string[];
  reportLost: (item: string) => void;
  claimItem: (item: string) => void;
};

// 1. 핵심 : 인자는 보험이므로 상위에 Provider가 없을때 문자열 출력됨
export const NoticeContext = createContext("현재 등록된 공지가 없습니다.");
export const CenterContext = createContext<CenterContextValue | null>(null);
