import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import type { Task } from "./components/types";
import TaskList from "./components/TaskList";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    console.log(tasks);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((tasks.filter((task) => task.id !== id )))
  }

  return (
    <>
      <Header name="Awuraama" />
      <Input input={input} setInput={setInput} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask = {deleteTask} />
    </>
  );
};

export default App;
