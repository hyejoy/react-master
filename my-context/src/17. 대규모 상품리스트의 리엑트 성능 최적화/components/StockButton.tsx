import React from "react";
import { useProductDispatchContext } from "../contexts/useProductStateContext";

export const StockButton = React.memo(({ id }: { id: number }) => {
  const dispatch = useProductDispatchContext();

  console.log(`버튼 ${id} 렌더링됨 (최적화 확인용)`);

  return (
    <>
      <button onClick={() => dispatch({ type: "TOGGLE_STOCK", id })}>
        상태 변경
      </button>
    </>
  );
});
