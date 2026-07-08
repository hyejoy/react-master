import { AuthProvider } from "./14. 전사적 인증 및 권한 관리 시스템/contexts/AuthProvider";
import AppContent from "./14. 전사적 인증 및 권한 관리 시스템/Pages/AppContent";

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
