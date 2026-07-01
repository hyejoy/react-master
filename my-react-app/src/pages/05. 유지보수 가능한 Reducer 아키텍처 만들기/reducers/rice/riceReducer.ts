import type { RICE_ACTION, RICE_INITIAL_TYPE } from "./riceTypes";

export const initialRiceState: RICE_INITIAL_TYPE = {
  stock: 20,
  warning: "",
};

export function riceReducer(state: RICE_INITIAL_TYPE, action: RICE_ACTION) {
  switch (action.type) {
    case "ADD_RICE":
      return {
        ...state,
        stock: state.stock + (action.stock ?? 1),
        warning: state.stock > 5 ? "" : "재고가 부족합니다",
      };
    case "REMOVE_RICE":
      return {
        ...state,
        stock: state.stock - (action.stock ?? 1),
        warning: state.stock < 5 ? "재고가 부족해요 ㅠㅠ" : "",
      };
    case "SET_RICE_WARNING":
      return { ...state, warning: action.warning };
    default:
      return state;
  }
}
