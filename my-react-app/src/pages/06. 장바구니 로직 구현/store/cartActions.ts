import type { Cart, CartActions } from "./cartType";

export function addCart(item: Cart): CartActions {
  return {
    type: "ADD_CART",
    payload: { id: item.id, item },
  };
}

export function increaseCart(id: number): CartActions {
  return {
    type: "INCREMENT",
    payload: { id },
  };
}

export function decreaseCart(id: number): CartActions {
  return {
    type: "DECREMENT",
    payload: { id },
  };
}

export function removeItem(id: number): CartActions {
  return {
    type: "REMOVE_ITEM",
    payload: { id },
  };
}
