import { ACTIONS } from "./cafeteriaConstants";

export function addRice(amount: number) {
  return {
    type: ACTIONS.ADD_RICE,
    amount,
  };
}

export function refillSoup(amount: number) {
  return {
    type: ACTIONS.REFILE_SOUP,
    amount,
  };
}

export function changeSide(side: string) {
  return {
    type: ACTIONS.CHANGE_SIDE,
    side,
  };
}
