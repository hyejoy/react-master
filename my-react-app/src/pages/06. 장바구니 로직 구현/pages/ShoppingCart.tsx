import { useReducer } from "react";
import { cartReducer, initialCartState } from "../store/cartReducer";
import {
  addCart,
  decreaseCart,
  increaseCart,
  removeItem,
} from "../store/cartActions";
import type { Cart } from "../store/cartType";

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const item: Cart = {
    id: Date.now(),
    name: "신선한 사과",
    qty: 1,
  };
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>🛒 장바구니 미션</h1>
      <button
        onClick={() => dispatch(addCart(item))}
        style={{ marginBottom: "20px", width: "100%", padding: "10px" }}
      >
        랜덤 상품 추가하기
      </button>

      {state.items.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {state.items.map((item) => (
            <li
              key={item.id}
              style={{
                borderBottom: "1px solid #eee",
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <br />
              </div>
              <div>
                <button onClick={() => dispatch(decreaseCart(item.id))}>
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => dispatch(increaseCart(item.id))}>
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
