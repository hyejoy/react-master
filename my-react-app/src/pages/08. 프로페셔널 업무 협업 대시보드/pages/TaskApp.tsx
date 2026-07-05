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
import type { Prioprity } from "../store/tasks/geminiTypes";

export default function TaskApp() {
  const [state, dispatch] = useReducer(geminiReducer, initialGemini);

  const onCreate = ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    dispatch(addTask({ name, description }));
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
      <TaskInput onCreate={onCreate} />
      <TaskItem
        state={state.items}
        toggleDone={toggleDone}
        togglePrioprity={onUpdatePriority}
        onDelete={onDelete}
      />
    </>
  );
}
