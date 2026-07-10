import { useMemo, useReducer, type ReactNode } from "react";
import {
  ProductDispatchContext,
  ProductStateContext,
  type ProductAction,
  type ProductData,
} from "./ProductStateContext";

const initialProductState: ProductData[] = [
  {
    id: 1,
    name: "react shirt",
    isSoldOut: false,
  },
  {
    id: 2,
    name: "vue skirt",
    isSoldOut: true,
  },
  {
    id: 3,
    name: "minku coat",
    isSoldOut: false,
  },
];

function productReducer(state: ProductData[], action: ProductAction) {
  switch (action.type) {
    case "TOGGLE_STOCK":
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              isSoldOut: !item.isSoldOut,
            }
          : item,
      );
    default:
      return state;
  }
}

export function ProductProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(productReducer, initialProductState);

  const productStateValue = useMemo(() => ({ products: items }), [items]);
  const productDispatchValue = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <ProductStateContext.Provider value={productStateValue}>
      <ProductDispatchContext.Provider value={productDispatchValue}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}
