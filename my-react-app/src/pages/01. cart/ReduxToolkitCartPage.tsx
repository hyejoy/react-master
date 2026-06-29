import { Provider, useDispatch, useSelector } from "react-redux";
import { cartStore, type RootState } from "./redux-toolkit/cartStore";
import { increaseQty } from "./redux-toolkit/cartSlice";

function CartContent() {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const dispath = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}원 x {item.qty}
            <button
              onClick={() =>
                dispath(increaseQty({ id: item.id, price: item.price }))
              }
            >
              수량 추가
            </button>
          </li>
        ))}
      </ul>
      <p>총 금액: {totalPrice.toLocaleString()}원</p>
      <p>할인: -{discount.toLocaleString()}원</p>
      <p>최종 할인 금액 : {(totalPrice - discount).toLocaleString()}원</p>
    </div>
  );
}

export default function ReduxToolkitCartPage() {
  return (
    <Provider store={cartStore}>
      <CartContent />
    </Provider>
  );
}
