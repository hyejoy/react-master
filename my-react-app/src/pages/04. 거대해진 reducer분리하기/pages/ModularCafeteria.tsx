import { useReducer } from "react";
import { cafeteriaReducer } from "../store/cafeteriaReducer";
import { addRice, changeSide, refillSoup } from "../store/cafeteriaActions";

export default function ModularCafeteria() {
  const initialState = {
    rice: 20,
    soup: 30,
    side: "김치",
  };

  const [state, dispatch] = useReducer(cafeteriaReducer, initialState);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fdfdfd",
        border: "1px solid #eee",
      }}
    >
      <h1>🍱 실전! 모듈화 급식실 시스템</h1>
      <hr />

      <p>
        🍚 밥 재고: <strong>{state.rice}</strong>인분
      </p>
      {/* 💡 핵심: dispatch({ type: ... }) 대신 자동 작성 함수를 호출합니다! */}
      <button onClick={() => dispatch(addRice(10))}>밥 10인분 추가</button>

      <p>
        🍲 국 재고: <strong>{state.soup}</strong>인분
      </p>
      <button onClick={() => dispatch(refillSoup(5))}>국 5인분 추가</button>

      <p>
        🍱 오늘 반찬: <strong style={{ color: "blue" }}>{state.side}</strong>
      </p>
      <button onClick={() => dispatch(changeSide("메추리알장조림"))}>
        반찬 교체
      </button>

      <blockquote
        style={{ marginTop: "30px", color: "#666", fontStyle: "italic" }}
      >
        "이제 컴포넌트 파일에는 화면 구성만 남고, 복잡한 로직은 store 폴더로
        숨었습니다. 이것이 바로 대규모 서비스로 나아가는 관심사 분리의
        첫걸음입니다."
      </blockquote>
    </div>
  );
}
