import React, { useContext } from "react";
import '../sass/task.scss'
import { TaskListContext } from "../context/TaskListContext";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className="listItem">
      <span>{task.title}</span>
      <div>

        <Button onClick={() => removeTask(task.id)}>
          <DeleteForeverIcon />
        </Button>

        <Button onClick={() => findItem(task.id)}>
          <EditIcon />
        </Button>

      </div>
    </li>
  );
};

export default Task;
