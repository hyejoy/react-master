import { useThemeContext } from "../Contexts/useThemeContext";

export default function ThemeButton() {
  // 5. 주민센터에서 "스위치를 누르는 기능"만 골라서 가져옵니다.
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: isDarkMode ? "#eee" : "#333",
        color: isDarkMode ? "#333" : "#eee",
        borderRadius: "5px",
        border: "none",
        fontWeight: "bold",
      }}
    >
      {isDarkMode ? "☀️ 라이트 모드로 변경" : "🌙 다크 모드로 변경"}
    </button>
  );
}
