import React, { useReducer } from "react";
import { addRice, removeRice, setRiceWarning } from "../rice/riceActions";
import { initialRiceState } from "../rice/riceReducer";
import { rootReducer } from "../rootReducer";
import { addSoup, removeSoup, warningSoup } from "../soup/soupActions";
import { initialSoupState } from "../soup/soupReducer";

const refills = [5, 15, 30];

export default function ArchitectureCafeteria() {
  const initialState = {
    rice: initialRiceState,
    soup: initialSoupState,
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>🍱 아키텍처 기반 급식실 시스템</h1>
      <hr />

      <div
        style={{ background: "#f8fafc", padding: "20px", borderRadius: "15px" }}
      >
        <h3>🍚 밥 재고 관리</h3>
        <p style={{ fontSize: "1.5rem" }}>
          현재 재고: <strong>{state.rice.stock}</strong>인분
        </p>

        {state.rice.stock < 5 && (
          <p style={{ color: "red" }}>
            ⚠️ {state.rice.warning || "재고 부족!"}
          </p>
        )}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {refills.map((stock) => (
            <React.Fragment key={stock}>
              <button onClick={() => dispatch(addRice(stock))}>{+stock}</button>
              <button onClick={() => dispatch(removeRice(stock))}>
                {-stock}
              </button>
            </React.Fragment>
          ))}
          <button
            onClick={() => dispatch(setRiceWarning("쌀이 거의 떨어졌습니다!"))}
          >
            경고 알림 설정
          </button>
        </div>
      </div>

      <br />

      <div
        style={{ background: "#f8fafc", padding: "20px", borderRadius: "15px" }}
      >
        <h3>국 재고 관리</h3>
        <p style={{ fontSize: "1.5rem" }}>
          현재 재고: <strong>{state.soup.stock}</strong>인분
        </p>

        {state.soup.stock < 5 && (
          <p style={{ color: "red" }}>
            ⚠️ {state.soup.warning || "재고 부족!"}
          </p>
        )}
        {refills.map((stock) => (
          <React.Fragment key={stock + "soup"}>
            <button onClick={() => dispatch(addSoup(stock))}>{+stock}</button>
            <button onClick={() => dispatch(removeSoup(stock))}>
              {-stock}
            </button>
          </React.Fragment>
        ))}
        <button
          onClick={() => dispatch(warningSoup("국이 거의 떨어졌습니다!"))}
        >
          경고 알림 설정
        </button>
      </div>

      <blockquote style={{ marginTop: "20px", color: "#666" }}>
        "폴더 구조와 이름만 보고도 'rice' 폴더를 찾아가 로직을 수정할 수
        있습니다. 이것이 바로 유지보수가 쉬운 아키텍처의 힘입니다."
      </blockquote>
    </div>
  );
}
