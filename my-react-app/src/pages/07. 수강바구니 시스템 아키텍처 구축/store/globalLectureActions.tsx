import type { LectureAction } from "./globalLectureType";

export function increaseLecture(id: number, price: number): LectureAction {
  return {
    type: "INCREMENT",
    payload: { id, price },
  };
}

export function decreaseLecture(id: number, price: number): LectureAction {
  return {
    type: "DECREMENT",
    payload: { id, price },
  };
}

export function removeLecture(id: number, price: number): LectureAction {
  return {
    type: "REMOVE",
    payload: { id, price },
  };
}
