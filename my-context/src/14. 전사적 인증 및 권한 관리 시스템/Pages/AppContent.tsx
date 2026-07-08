import AdminPanel from "../components/AdminPalnel";
import Header from "../components/Header";
import { useAuthContext } from "../contexts/useAuthContext";

export default function AppContent() {
  const { isAdmin } = useAuthContext();

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <main style={{ marginTop: "20px" }}>
        <h2>오늘의 실시간 주요 뉴스</h2>
        <p>React Context를 마스터하면 대형 앱도 두렵지 않습니다.</p>

        {/* 권한 관리 핵심: isAdmin이 true일 때만 비밀 창고를 엽니다. */}
        {isAdmin && <AdminPanel />}
      </main>
    </div>
  );
}
