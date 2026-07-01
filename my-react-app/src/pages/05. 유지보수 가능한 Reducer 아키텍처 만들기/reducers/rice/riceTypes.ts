// 문자열 오타를 원천 차단하기 위해 '밥 관리'에서 일어날 수 있는 모든 행동을 상수로 정의합니다.

// export const RICE_TYPE = {
//   ADD_RICE: "ADD_RICE",
//   REMOVE_RICE: "REMOVE_RICE",
//   SET_RICE_WARNING: "SET_RICE_WARNING",
// };

export type RICE_INITIAL_TYPE = {
  stock: number;
  warning?: string;
};

export type RICE_ACTION_TYPE = "ADD_RICE" | "REMOVE_RICE" | "SET_RICE_WARNING";

export type RICE_ACTION_PAYLOAD = Partial<RICE_INITIAL_TYPE>;

export type RICE_ACTION = {
  type: RICE_ACTION_TYPE;
} & RICE_ACTION_PAYLOAD;
