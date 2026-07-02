export type Lecture = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type LectureActionTypes = "INCREMENT" | "DECREMENT" | "REMOVE";

export type LecturePayloadTypes = {
  id: number;
  price: number;
};

export type LectureAction = {
  type: LectureActionTypes;
  payload: LecturePayloadTypes;
};

export type initialLectureType = {
  totalAmount: number;
  lectures: Lecture[];
};
