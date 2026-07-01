export type SOUP_INIITIAL_TYPE = {
  stock: number;
  warning?: string;
};

export type SOUP_ACTION_TYPE = "ADD_SOUP" | "REMOVE_SOUP" | "SET_SOUP_WARNING";

export type SOUP_ACTION_PAYLOAD = Partial<SOUP_INIITIAL_TYPE>;

export type SOUP_ACTION = {
  type: SOUP_ACTION_TYPE;
} & SOUP_ACTION_PAYLOAD;
