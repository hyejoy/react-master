/**
 * rootReducer : 각 하위 리듀서에게 상태의 일부를 맡기고 결과를 취합합니다,
 * @param {object} state - 전체 앱 상태
 * @param {object} action - 발생한 액션
 */

import type { RICE_ACTION, RICE_INITIAL_TYPE } from "./rice/riceTypes";
import type { SOUP_ACTION, SOUP_INIITIAL_TYPE } from "./soup/soupType";
import { riceReducer } from "./rice/riceReducer";
import { soupReducer } from "./soup/soupReducer";

export type RootState = {
  rice: RICE_INITIAL_TYPE;
  soup: SOUP_INIITIAL_TYPE;
};
type RootAction = RICE_ACTION | SOUP_ACTION;

// 여기서 state, action type을 어떻게 현명하게 나눌수있을지 고민해보자
export function rootReducer(state: RootState, action: RootAction) {
  return {
    rice: riceReducer(state.rice, action as RICE_ACTION),
    soup: soupReducer(state.soup, action as SOUP_ACTION),
  };
}
