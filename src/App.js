import React from "react";
import Counter from "./components/Counter/counter";
import TaskForm from "./components/Todo/TaskForm/taskForm";
import TaskList from "./components/Todo/TaskList/taskList";

function App() {
  return (
    <>
      <Counter />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
