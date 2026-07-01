import type { RICE_ACTION } from "./riceTypes";

export const addRice = (stock: number): RICE_ACTION => ({
  type: "ADD_RICE",
  stock,
});

export const removeRice = (stock: number): RICE_ACTION => ({
  type: "REMOVE_RICE",
  stock,
});

export const setRiceWarning = (warning: string): RICE_ACTION => ({
  type: "SET_RICE_WARNING",
  warning,
});
