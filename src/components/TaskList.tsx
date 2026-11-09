import TaskItem from "./TaskItem"
import type { Task } from "./types"

interface TaskListProps {
  tasks: Task []
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskList = ({tasks, toggleTask, deleteTask} : TaskListProps) => {
  return (
    <div className="task-list-div">
      <ul className="task-list">
      {tasks.map((task) =>
      <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask = {deleteTask} />
      )}
    </ul>
    </div>
  )
}

export default TaskList
