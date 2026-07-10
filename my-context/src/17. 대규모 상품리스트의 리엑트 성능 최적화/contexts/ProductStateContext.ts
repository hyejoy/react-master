import { createContext, type Dispatch } from "react";

export type ProductData = {
  id: number;
  name: string;
  isSoldOut: boolean;
};

export type ProductAction = {
  type: "TOGGLE_STOCK";
  id: number;
};

export type ProductContextValue = {
  products: ProductData[];
};

export type ProductDispatchValue = {
  dispatch: Dispatch<ProductAction>;
};

export const ProductStateContext = createContext<ProductContextValue | null>(
  null,
);

export const ProductDispatchContext =
  createContext<ProductDispatchValue | null>(null);
