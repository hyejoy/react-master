import { useProductStateContext } from "../contexts/useProductStateContext";
import { StockButton } from "./StockButton";

export default function ProductList() {
  const { products } = useProductStateContext();
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.id} - {item.name} ___ {item.isSoldOut ? "품절" : "재고있음"}
          <StockButton id={item.id} />
        </li>
      ))}
    </ul>
  );
}
