import type { GeminiAction, GeminiPayload } from "./geminiTypes";

export function addTask(
  payload: Pick<GeminiPayload, "name" | "description">,
): GeminiAction {
  return {
    type: "ADD_TASK",
    payload: {
      id: Date.now(),
      name: payload?.name,
      done: false,
      description: payload?.description,
      prioprity: "Medium",
    },
  };
}

export function toggleTask(payload: GeminiPayload): GeminiAction {
  return {
    type: "TOGGLE_TASK",
    payload: {
      id: payload?.id,
    },
  };
}

export function updatePriority(payload: GeminiPayload): GeminiAction {
  return {
    type: "UPDATE_PRIOPRITY",
    payload: {
      id: payload.id,
      prioprity: payload.prioprity,
    },
  };
}

export function deleteTask(payload: GeminiPayload): GeminiAction {
  return {
    type: "DELETE_TASK",
    payload: { id: payload.id },
  };
}
