import { useAuthContext } from "../contexts/useAuthContext";

export default function Header() {
  const { toggleAdmin, toggleLogin, isAdmin, isLogin } = useAuthContext();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "2px solid #333",
      }}
    >
      <h1>🌐 React Times</h1>
      <button onClick={toggleLogin}>{isLogin ? "로그아웃" : "로그인"}</button>
      <div>
        {isLogin ? (
          <>
            <span>({isAdmin ? "관리자" : "독자"}) </span>
          </>
        ) : (
          // 실무적 예시: 로그인 시 관리자 권한을 함께 부여해봅니다.
          <button onClick={toggleAdmin}>관리자로 로그인</button>
        )}
      </div>
    </header>
  );
}
