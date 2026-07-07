import { useContext } from "react";
import { LanguageContext, type Language } from "../contexts/LanguageContext";

export default function ContentCard() {
  const lang = useContext(LanguageContext);

  const content: Record<Language, string> = {
    ko: "안녕하세요, 컨텍스트 덕분에 중간 컴포넌트들이 아주 깨끗해졌습니다.",
    en: "Hello! Thanks to Context, the middle components are now very clean.",
  };

  return (
    <div
      style={{
        border: "2px solid #007bff",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h5>[ Content Card ]</h5>
      <p>
        현재 적용된 전역 언어: <strong>{lang}</strong>
      </p>
      <h2 style={{ color: "#007bff" }}>{content[lang]}</h2>
    </div>
  );
}
