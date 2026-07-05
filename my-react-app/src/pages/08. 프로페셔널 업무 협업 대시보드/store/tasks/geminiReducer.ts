import type { Gemini, GeminiAction, GeminiState } from "./geminiTypes";

export const initialGemini: GeminiState = { items: [] };

export function geminiReducer(state: GeminiState, action: GeminiAction) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, items: [...state.items, action.payload as Gemini] };
    case "TOGGLE_TASK":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, done: !item.done } : item,
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_PRIOPRITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, prioprity: action.payload.prioprity ?? item.prioprity }
            : item,
        ),
      };
  }
}
