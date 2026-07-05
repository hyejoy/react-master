import { useState } from "react";
import type { Gemini } from "../store/tasks/geminiTypes";

export default function TaskInput({
  onClick,
}: {
  onClick: (payload: Pick<Partial<Gemini>, "name" | "description">) => void;
}) {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setDescription] = useState("");

  return (
    <>
      <input
        placeholder="할일"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        placeholder="내용"
        value={inputDescription}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          onClick({ name: inputName, description: inputDescription });
          setInputName("");
          setDescription("");
        }}
      >
        등록
      </button>
    </>
  );
}
