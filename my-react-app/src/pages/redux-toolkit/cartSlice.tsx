import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ItemWithQty[];
  totalPrice: number;
  discount: number;
}

const initialState: CartState = {
  items: [
    { id: 1, name: "고성능 키보드", price: 150000, qty: 1 },
    { id: 2, name: "무선 마우스", price: 80000, qty: 1 },
  ],
  totalPrice: 230000,
  discount: 10000,
};

const cartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    increaseQty: (state, action: PayloadAction<{ id: any; price: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1; // Immer가 추적하므로 직접 변경 가능
      }
      state.totalPrice += action.payload.price;
      state.discount += 500;
    },
  },
});

export const { increaseQty } = cartSlice.actions;
export default cartSlice.reducer;
