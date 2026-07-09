import ProductCard from "../components/ProductCard";
import { ToastContainer } from "../components/ToastContainer";
import { ToastProvider } from "../contexts/ToastProvider";

export default function ToastMall() {
  return (
    <>
      <ToastProvider>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>🛒 React Mall</h1>
          <ProductCard name="리액트 숙련자 티셔츠" />
          <ToastContainer />
        </div>
      </ToastProvider>
    </>
  );
}
