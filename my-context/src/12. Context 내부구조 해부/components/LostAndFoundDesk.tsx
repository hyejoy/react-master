import { useState } from "react";
import { useCenterContext } from "../contexts/useCenterContext";

export function LostAndFoundDesk() {
  // 주민센터 시스템에서 필요한 데이터와 기능을 구조 분해 할당으로 가져옵니다.
  const { lostItems, reportLost, claimItem } = useCenterContext();
  const [inputText, setInputText] = useState("");

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>📦 분실물 센터</h2>
      <ul>
        {lostItems.map((item) => (
          <li key={item}>
            {item} <button onClick={() => claimItem(item)}>찾아감</button>
          </li>
        ))}
      </ul>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="분실물 입력"
      />
      <button
        onClick={() => {
          reportLost(inputText);
          setInputText("");
        }}
      >
        신고하기
      </button>
    </div>
  );
}
