/**
 * 행동 중심으로 상태를 변경하는 메인 실습 파일
 * 흩어져 있던 setState들을 하나의 reducer 함수로 모으고, 사용자의 행동을 dispatch로 전달하는 구조를 작성한다. */

import { useReducer } from "react";

const initialState: InitItems = {
  items: [
    { id: 1, name: "고성능 키보드", price: 150000, qty: 1 },
    { id: 2, name: "무선 마우스", price: 80000, qty: 1 },
  ],
  totalPrice: 230000,
  discount: 10000,
};

type CartAction = {
  type: "INCREASE_QTY";
  payload: { id: number | string; price: number };
};

// 2. 리듀서 (reducer) : 상태 변화의 '중앙 규칙서'
// (이전상태, 액션)을 받아 새로운 상태를 계산하여 반환합니다.

function cartReducer(state: InitItems, action: CartAction): InitItems {
  switch (action.type) {
    case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        ),
        totalPrice: state.totalPrice + action.payload.price,
        discount: Math.max(0, state.discount - 500),
      };
    default:
      return state;
  }
}

export default function ReducerCartPage() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div style={{ padding: "20px", border: "2px solid #" }}>
      <div>장바구니 (useReducer 첫걸음)</div>
      <hr />
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}
            수량 : {item.qty}
            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QTY",
                  payload: { id: item.id, price: item.price },
                })
              }
            >
              수량 추가
            </button>
          </li>
        ))}
      </ul>
      <div>
        <p>상품 합계 : {state.totalPrice.toLocaleString()}원</p>
        <p>적용 할인 : {state.discount.toLocaleString()}원</p>
        <h2>
          최종 결제 금액 :{" "}
          {(state.totalPrice - state.discount).toLocaleString()}원
        </h2>
      </div>
    </div>
  );
}
