import { useReducer } from "react";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import {
  addTask,
  deleteTask,
  toggleTask,
  updatePriority,
} from "../store/tasks/geminiActons";
import { geminiReducer, initialGemini } from "../store/tasks/geminiReducer";
import type { GeminiPayload, Prioprity } from "../store/tasks/geminiTypes";

export default function TaskApp() {
  const [state, dispatch] = useReducer(geminiReducer, initialGemini);

  const onCreate = (payload: Pick<GeminiPayload, "name" | "description">) => {
    dispatch(addTask(payload));
  };

  const onDelete = (id: number) => {
    dispatch(deleteTask({ id }));
  };

  const toggleDone = (id: number) => {
    dispatch(toggleTask({ id }));
  };

  const onUpdatePriority = (id: number, prioprity: Prioprity) => {
    dispatch(updatePriority({ id, prioprity }));
  };

  return (
    <>
      <TaskInput onClick={onCreate} />
      <TaskItem
        state={state.items}
        toggleDone={toggleDone}
        togglePrioprity={onUpdatePriority}
        onDelete={onDelete}
      />
    </>
  );
}
