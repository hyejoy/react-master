import { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "고성능 키보드", price: 150000 },
    { id: 2, name: "무선 마우스", price: 80000 },
  ]);

  const [totalPrice, setTotalPrice] = useState(230000);
  const [isLoading, setIsLoading] = useState(false);

  // 상품 추가 로직
  const handleAddToCart = () => {
    const newItem: Item = { id: Date.now(), name: "새 상품", price: 50000 };

    // 상태 동기화의 위험성 : items와 totalPrice를 각각 따로 업데이트 해야함
    setItems((prev) => [...prev, newItem]);
    setTotalPrice((prev) => prev + newItem.price);
  };

  // 상품 삭제 로직 (실수가 잦은 지점!)
  const handleRemoveItem = (id: any, price: number) => {
    //⚠️ 만약 여기서 setItems만 하고 price는 깜빡한다면?
    // 데이터와 화면의 숫자가 따로노는 '상태 불일치' 버그가 발생한다.
    setItems((prev) => prev.filter((item) => item.id !== id));
    setTotalPrice((prev) => prev - price);
  };
  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1>장바구니 (useState버전)</h1>
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}원
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleRemoveItem(item.id, item.price)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <h2>총 결제 금액 : {totalPrice.toLocaleString()}원</h2>
      <button
        onClick={() => handleAddToCart()}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        상품 추가 (+50,000원)
      </button>
      <blockquote
        style={{ marginTop: "30px", background: "#f0f0f0", padding: "10px" }}
      >
        <strong>이 코드의 문제점 : </strong> 지금은 상태가 2개이지만, 할인율,
        배송비, 포인트 계산까지 추가된다면 handleRemoveItem함수는 순식간에
        10줄이 넘어가는 괴물 코드가 될것입니다.ㅠㅠ
      </blockquote>
    </div>
  );
}
