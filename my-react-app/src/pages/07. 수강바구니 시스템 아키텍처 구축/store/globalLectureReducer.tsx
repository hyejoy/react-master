import type {
  initialLectureType,
  Lecture,
  LectureAction,
} from "./globalLectureType";

export const initialLectureCart: initialLectureType = {
  totalAmount: 140000,
  lectures: [
    {
      id: 1,
      name: "React mast class",
      price: 50000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Next.js 실무 가이드",
      price: 45000,
      quantity: 2,
    },
  ],
};

export function globalLectureReducer(
  state: initialLectureType,
  action: LectureAction,
) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload.price,
        lectures: state.lectures.map((lecture) =>
          lecture.id === action.payload.id
            ? { ...lecture, quantity: lecture.quantity + 1 }
            : lecture,
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        totalAmount:
          state.totalAmount === 0
            ? 0
            : state.totalAmount - action.payload.price,
        lectures: state.lectures
          .map((lecture) =>
            lecture.id === action.payload.id
              ? { ...lecture, quantity: lecture.quantity - 1 }
              : lecture,
          )
          .filter((lecture) => lecture.quantity > 0),
      };
    case "REMOVE":
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload.price,
        lectures: state.lectures.filter(
          (lecture) => lecture.id !== action.payload.id,
        ),
      };
  }
}
