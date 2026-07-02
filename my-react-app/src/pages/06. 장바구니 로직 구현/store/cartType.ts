// 장바구니 추가
// 장바구니 수량 추가
// 장바구니 수량 삭제
// 장바구니 초기화

export type Cart = {
  id: number;
  name: string;
  qty: number;
};

export type CartTypes = "ADD_CART" | "INCREMENT" | "DECREMENT" | "REMOVE_ITEM";

export type CartPayload = {
  id: number;
  item?: Cart;
};

export type CartActions = {
  type: CartTypes;
  payload: CartPayload;
};
