import React, { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (title) => {
    setTasks([{ title, id: uuid() }, ...tasks]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setEdit("")
  };
  const clearList = () => {
    setTasks([]);
    setEdit("")
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEdit(item);
  };
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEdit(null);
  };
  

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        edit,
       
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListContextProvider;
