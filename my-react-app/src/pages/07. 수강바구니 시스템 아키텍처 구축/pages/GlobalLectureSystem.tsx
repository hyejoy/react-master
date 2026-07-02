import { useReducer } from "react";
import {
  globalLectureReducer,
  initialLectureCart,
} from "../store/globalLectureReducer";
import {
  decreaseLecture,
  increaseLecture,
  removeLecture,
} from "../store/globalLectureActions";

export default function GlobalLectureSystem() {
  const [state, dispatch] = useReducer(
    globalLectureReducer,
    initialLectureCart,
  );
  return (
    <>
      <h1>GlobalLectureSystem Component</h1>
      <ul>
        {state.lectures.map((lecture) => (
          <li>
            {lecture.name}----
            {lecture.price.toLocaleString()}원
            <button
              onClick={() =>
                dispatch(increaseLecture(lecture.id, lecture.price))
              }
            >
              +
            </button>
            {lecture.quantity}
            <button
              onClick={() =>
                dispatch(decreaseLecture(lecture.id, lecture.price))
              }
            >
              -
            </button>
            <button
              onClick={() =>
                dispatch(
                  removeLecture(lecture.id, lecture.price * lecture.quantity),
                )
              }
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <hr></hr>
      <h1>총 강의 수 : {state.lectures.length}개</h1>
      <h1>최종 결제 금액: {state.totalAmount.toLocaleString()}원</h1>
    </>
  );
}
