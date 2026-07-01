import type { SOUP_ACTION, SOUP_INIITIAL_TYPE } from "./soupType";

export const initialSoupState: SOUP_INIITIAL_TYPE = {
  stock: 50,
  warning: "",
};
export function soupReducer(
  state: SOUP_INIITIAL_TYPE,
  action: SOUP_ACTION,
): SOUP_INIITIAL_TYPE {
  switch (action.type) {
    case "ADD_SOUP":
      return { ...state, stock: state.stock + action.stock! };

    case "REMOVE_SOUP":
      return { ...state, stock: state.stock - action.stock! };

    case "SET_SOUP_WARNING":
      console.log(state.warning);
      return { ...state, warning: action.warning };
    default:
      return state;
  }
}
