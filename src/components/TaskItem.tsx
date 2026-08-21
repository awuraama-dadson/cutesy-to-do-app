import type { Task } from "./types";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
  return (
    <li className="task-item" onClick={() => toggleTask(task.id)}>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button
        className="close-btn"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;
