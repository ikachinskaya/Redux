import React from "react";
import Counter from "./components/Counter/counter";
import TaskForm from "./components/Todo/TaskForm/taskForm";
import TaskList from "./components/Todo/TaskList/taskList";
import UserForm from "./components/UserForm/userForm";
import UserList from "./components/UserList/userList";
function App() {
  return (
    <>
      <Counter />
      <TaskForm />
      <TaskList />
      <UserForm />
      <UserList />
    </>
  );
}

export default App;
