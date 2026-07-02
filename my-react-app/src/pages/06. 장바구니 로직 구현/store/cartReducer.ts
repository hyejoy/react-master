import type { Cart, CartActions } from "./cartType";

type InitialType = { items: Cart[] };

export const initialCartState: InitialType = {
  items: [
    {
      id: 1,
      name: "사과",
      qty: 3,
    },
    {
      id: 2,
      name: "복숭아",
      qty: 1,
    },
    {
      id: 4,
      name: "고구마",
      qty: 6,
    },
    {
      id: 5,
      name: "얼음",
      qty: 9,
    },
  ],
};

export function cartReducer(state: InitialType, action: CartActions) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.payload.item);
      if (!action.payload.item) return state;
      return { ...state, items: [...state.items, action.payload.item] };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - 1 }
              : item,
          )
          .filter((item) => item.qty > 0), // qty 0 이하면 제거하기
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
  }
}
