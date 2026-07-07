import { LostAndFoundDesk } from "../components/LostAndFoundDesk";
import { NoticeBoard } from "../components/NoticeBoard";
import { CenterProvider } from "../contexts/CenterProvider";

export default function CenterApp() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🏢 스마트 아파트 관리 시스템</h1>

      {/* 1. NoticeContext는 Provider 없이 '보험값'이 어떻게 나오는지 확인해봅니다. */}
      <NoticeBoard />

      {/* 2. CenterProvider로 감싸서 하위 컴포넌트들에 기능을 방송(Broadcasting)합니다. */}
      <CenterProvider>
        <LostAndFoundDesk />
      </CenterProvider>
    </div>
  );
}
