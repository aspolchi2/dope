import React, { useContext } from "react";
import Task from "../components/Task";
import { TaskListContext } from "../context/TaskListContext";
const TasksContainer = () => {
  const { tasks } = useContext(TaskListContext);

  if(tasks.length === 0){
    return <div>Add a Task to save</div>
  }
  return (
    <div>
      <ul className="list">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default TasksContainer;
