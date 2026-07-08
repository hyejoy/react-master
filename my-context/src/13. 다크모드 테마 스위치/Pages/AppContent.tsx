import type { CSSProperties } from "react";
import ThemeButton from "../Components/ThemeButton";
import { useThemeContext } from "../Contexts/useThemeContext";

export default function AppContent() {
  // 3. 현재 게시판에 게시된 테마 상태를 확인합니다.
  const { isDarkMode } = useThemeContext();

  const themeStyle: CSSProperties = {
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#222",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyle}>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h1>🌐 React Times</h1>
      </header>
      <div style={{ display: "flex", padding: "20px", gap: "40px" }}>
        <aside>
          <h2>사이드바</h2>
          <p>테마 변경 실습 영역입니다.</p>
        </aside>
        <main>
          <h2>오늘의 주요 뉴스</h2>
          <p>Context API를 활용하면 테마 변경도 누워서 떡 먹기!</p>
          <ThemeButton />
        </main>
      </div>
    </div>
  );
}
