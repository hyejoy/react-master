// 로직을 별도의 파일로 빼서 컴포넌트 코드를 가볍게 만듭니다.
// 오직 상태 와 액션 만 받아서 새상태를 계산하는 순수 함수 메뉴입니다.

import { ACTIONS } from "./cafeteriaConstants";

type CafeteriaAction = {
  amount?: number;
  side?: string;
} & { type: keyof typeof ACTIONS };

export function cafeteriaReducer(state: any, action: CafeteriaAction) {
  switch (action.type) {
    case ACTIONS.ADD_RICE:
      return { ...state, rice: state.rice + action.amount };

    case ACTIONS.REFILE_SOUP:
      return { ...state, soup: state.soup + action.amount };

    case ACTIONS.CHANGE_SIDE:
      return { ...state, side: action.side };

    default:
      return state;
  }
}
