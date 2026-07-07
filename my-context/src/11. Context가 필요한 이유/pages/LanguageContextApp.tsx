import { useState } from "react";
import LayoutSection from "../components/LayoutSection";
import { LanguageContext, type Language } from "../contexts/LanguageContext";

export default function LanguageContextApp() {
  const [lang, setLang] = useState<Language>("ko");
  return (
    <LanguageContext.Provider value={lang}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>🌐 React Times</h1>
        <button
          onClick={() => setLang((prev) => (prev === "ko" ? "en" : "ko"))}
        >
          언어 변경 (Change Language)
        </button>
        <hr />
        {/* 중요: 하위 컴포넌트인 Layout에 어떠한 props도 전달하지 않습니다. */}
        <LayoutSection />
      </div>
    </LanguageContext.Provider>
  );
}
