export type GeminiActionTypes =
  | "ADD_TASK"
  | "TOGGLE_TASK"
  | "DELETE_TASK"
  | "UPDATE_PRIOPRITY";

export type Prioprity = "High" | "Medium" | "Low";

export type Gemini = {
  id: number;
  name?: string;
  description?: string;
  done?: boolean;
  prioprity: Prioprity;
};

export type GeminiPayload = Partial<Gemini>;

export type GeminiAction = {
  type: GeminiActionTypes;
  payload: GeminiPayload;
};

export type GeminiState = {
  items: Gemini[];
};
