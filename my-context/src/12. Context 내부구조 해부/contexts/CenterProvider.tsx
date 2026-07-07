import { useState, type ReactNode } from "react";
import { CenterContext } from "./CenterContext";

// 2. [실무 패턴] 전용 Provider component를 만들어 로직을 은닉합니다.
export function CenterProvider({ children }: { children: ReactNode }) {
  const [lostItems, setLostItems] = useState(["walet", "airpot"]);

  // 분실물 신고 기능
  const reportLost = (item: string) => setLostItems((prev) => [...prev, item]);

  // 물건 찾기 기능
  const claimItem = (item: string) =>
    setLostItems((prev) => prev.filter((i) => i !== item));

  // 3.[중요] 내려보낼 데이터와 기능을 하나의 객체로 묶습니다.
  const systemValue = { lostItems, reportLost, claimItem };

  return (
    <CenterContext.Provider value={systemValue}>
      {children}
    </CenterContext.Provider>
  );
}
