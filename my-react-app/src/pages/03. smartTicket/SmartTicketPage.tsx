import { useReducer } from "react";

type User = {
  reservedSeats: string[];
  grade: "BASIC" | "VIP";
  discount: 1.0 | 0.8;
  totalAmount: number;
};

type TicketAction = {
  type: "CLICKSEAT" | "CHANGEGRADE";
  payload?: { seat: "A1" | "A2" | "A3" | "A4" | "A5" };
};

const initialData: User = {
  reservedSeats: [],
  grade: "BASIC",
  discount: 1.0, // VIP : 0.8
  totalAmount: 0,
};

function ticketReducer(state: User, action: TicketAction) {
  switch (action.type) {
    case "CLICKSEAT":
      /** 자리 중복선택 체크 */
      const findSeated = state.reservedSeats.find(
        (seat) => seat === action.payload!.seat,
      );

      if (findSeated) {
        return {
          ...state,
          reservedSeats: state.reservedSeats.filter(
            (seat) => seat !== action.payload!.seat,
          ),
          totalAmount:
            (state.reservedSeats.length - 1) * 15000 * state.discount,
        };
      } else {
        /** 자리 최대 4개 선택만 가능 */
        if (state.reservedSeats.length === 4) {
          alert("최대 4석만 선택 가능합니다.");
          return state;
        }
        /** 새로운 자리 체크시 */
        return {
          ...state,
          reservedSeats: [...state.reservedSeats, action.payload!.seat],
          totalAmount:
            (state.reservedSeats.length + 1) * 15000 * state.discount,
        };
      }
    case "CHANGEGRADE":
      const newDiscount = state.grade === "BASIC" ? 0.8 : 1.0;
      return {
        ...state,
        grade: (state.grade === "BASIC" ? "VIP" : "BASIC") as "BASIC" | "VIP", // 여기서 왜 grade가 string으로 추적되는지 알려줘
        discount: newDiscount as 1.0 | 0.8,
        totalAmount: state.reservedSeats.length * 15000 * newDiscount,
      };
    default:
      return state;
  }
}

export default function SmartTicketPage() {
  const [ticket, dispatch] = useReducer(ticketReducer, initialData);
  return (
    <>
      <h1>SmartTicketPage Component</h1>
      <h1>
        {ticket.grade}{" "}
        <button onClick={() => dispatch({ type: "CHANGEGRADE" })}>
          등급 전환
        </button>
      </h1>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        {["A1", "A2", "A3", "A4", "A5"].map((seat) => (
          <button
            key={seat}
            style={
              ticket.reservedSeats.find((reserved) => reserved === seat)
                ? { border: "none", backgroundColor: "#2980b9" }
                : { boxShadow: "0 1px #2980b9" }
            }
            onClick={() => {
              dispatch({ type: "CLICKSEAT", payload: { seat: seat as any } });
              console.log(seat);
            }}
          >
            {seat}
          </button>
        ))}
      </div>

      <h1>선택된 좌석 : {ticket.reservedSeats.join(",")}</h1>
      <h1>
        사용자 등급 : {ticket.grade} ({((1 - ticket.discount) * 100).toFixed(0)}
        % 할인 적용 중)
      </h1>

      <h2>최종 결제 금액 : {ticket.totalAmount}</h2>
    </>
  );
}
