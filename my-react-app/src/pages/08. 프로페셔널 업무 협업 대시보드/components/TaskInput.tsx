import { useState } from "react";

export default function TaskInput({
  onCreate,
}: {
  onCreate: ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => void;
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
          onCreate({ name: inputName, description: inputDescription });
          setInputName("");
          setDescription("");
        }}
      >
        등록
      </button>
    </>
  );
}
