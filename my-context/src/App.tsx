import ProductList from "./17. 대규모 상품리스트의 리엑트 성능 최적화/components/ProductList";
import { ProductProvider } from "./17. 대규모 상품리스트의 리엑트 성능 최적화/contexts/ProductEngineProvider";

export default function App() {
  return (
    <ProductProvider>
      <div style={{ padding: "20px" }}>
        <h1>📦 React Mall 상품 관리 (최적화)</h1>
        <ProductList />
      </div>
    </ProductProvider>
  );
}
