import { useContext } from "react";
import { NoticeContext } from "../contexts/CenterContext";

export function NoticeBoard() {
  // 1층 로비에 가서 공지사항 게시판을 직접 확인하는 행위입니다.
  const notice = useContext(NoticeContext);

  return (
    <div
      style={{
        padding: "10px",
        background: "#fffbeb",
        border: "1px solid #f59e0b",
        marginBottom: "10px",
      }}
    >
      📢 아파트 공지: {notice}
    </div>
  );
}
