import { useEffect } from "react";
import { useAuthEngineContext } from "../contexts/useAuthEngineContext";

export default function Dashboard() {
  const {
    auth: { data, isLoading, error },
    dispatch,
  } = useAuthEngineContext();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const mockData = { sales: 1500000, order: 42 };
        dispatch({ type: "FETCH_SUCCESS", payload: mockData });
      } catch {
        dispatch({
          type: "FETCH_FAILURE",
          payload: "데이터를 가져오지 못했습니다.",
        });
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) return <div>서버 엔진 가동중 (로딩중...)</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <div>
        <h3>총 매출</h3>
        <p>{data?.sales.toLocaleString()}원</p>
      </div>
      <div>
        <h3>주문 수</h3>
        <p>{data?.order}건</p>
      </div>
    </div>
  );
}
