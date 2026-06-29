//급식실 비유를 코드로 구현한 메인 파일

import { useReducer } from "react";

/**
 * [운영 메뉴얼 : reducer 함수]
 * @param {number} state - 현재 제고표 (현재값)
 * @param {object} action - 요청서(어떤 행동을 할지 적힌 객체)
 * @returns {number} - 규칙에 따라 업데이트된 새로운 재고표
 */

export type CafeteriaData = {
  id: number;
  name: string;
  qty: number;
};

export type CafeteriaAction = {
  type: "INCREASE" | "DECREASE";
  payload: { id: number };
};

const initialData: CafeteriaData[] = [
  { id: 1, name: "밥 🍚", qty: 30 },
  { id: 2, name: "미역국 🍵", qty: 30 },
  { id: 3, name: "소세지 🥓", qty: 30 },
  { id: 4, name: "계란후라이 🍳", qty: 30 },
];

/**
 *
 * @param state : 재고 수량
 * @param action : 해야할일 종류 포스트잇
 * @param dispatch : 포스트잇 전달하는 팔
 * @param Reducer : 포스트잇을 보고 재고수량을 관리하는 관리 책임자
 */
function cafeteriaReducer(state: CafeteriaData[], action: CafeteriaAction) {
  switch (action.type) {
    case "INCREASE":
      // 메뉴 추가 요청
      return state.map((food) =>
        food.id === action.payload.id ? { ...food, qty: food.qty + 1 } : food,
      );

    case "DECREASE":
      // 메뉴 삭제 요청
      return state.map((food) =>
        food.id === action.payload.id
          ? { ...food, qty: food.qty ? food.qty - 1 : 0 }
          : food,
      );
    default:
      return state;
  }
}

export function CafeteriaPage() {
  const [menus, MenuDispatch] = useReducer(cafeteriaReducer, initialData);

  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          <strong>{menu.name}</strong> / 수량 : {menu.qty}
          <button
            onClick={() =>
              MenuDispatch({ type: "INCREASE", payload: { id: menu.id } })
            }
          >
            추가
          </button>
          <button
            onClick={() =>
              MenuDispatch({ type: "DECREASE", payload: { id: menu.id } })
            }
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
