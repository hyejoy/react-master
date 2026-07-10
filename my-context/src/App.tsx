import Dashboard from "./16. 실시간 대시보드의 데이터 패칭 엔진 구현/components/dashboard";
import { AuthEngineProvider } from "./16. 실시간 대시보드의 데이터 패칭 엔진 구현/contexts/AuthEngineProvider";

export default function App() {
  return (
    <AuthEngineProvider>
      <Dashboard />
    </AuthEngineProvider>
  );
}
