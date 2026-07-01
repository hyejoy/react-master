import type { SOUP_ACTION } from "./soupType";

export function addSoup(stock: number): SOUP_ACTION {
  return {
    type: "ADD_SOUP",
    stock,
  };
}

export function removeSoup(stock: number): SOUP_ACTION {
  return {
    type: "REMOVE_SOUP",
    stock,
  };
}

export function warningSoup(warning: string): SOUP_ACTION {
  console.log(warning);
  return {
    type: "SET_SOUP_WARNING",
    warning,
  };
}
