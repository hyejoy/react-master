import { ThemeProvider } from "./13. 다크모드 테마 스위치/Contexts/ThemeProvider";
import AppContent from "./13. 다크모드 테마 스위치/Pages/AppContent";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
