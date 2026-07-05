import type { Gemini, Prioprity } from "../store/tasks/geminiTypes";

export default function TaskItem({
  state,
  onDelete,
  toggleDone,
  togglePrioprity,
}: {
  state: Gemini[];
  onDelete: (id: number) => void;
  toggleDone: (id: number) => void;
  togglePrioprity: (id: number, prioprity: Prioprity) => void;
}) {
  return (
    <ul>
      {state.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleDone(item.id)}
          />
          <p>
            {item.name}- {item.description}
          </p>
          <select
            value={item.prioprity}
            onChange={(e) =>
              togglePrioprity(item.id, e.target.value as Prioprity)
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={() => onDelete(item.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
