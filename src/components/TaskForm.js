import { Button, Input } from "@mui/material";
import '../sass/taskForm.scss'
import React, { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const TaskForm = () => {
  const { addTask, clearList, edit, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!edit){
        addTask(title);
        setTitle("");

    }else {
        editTask(title, edit.id)
    }
  };

  useEffect(() => {
    if(edit){
        setTitle(edit.title)
        
    }else{
        setTitle('')
    }
  }, [edit])
  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        onChange={handleChange}
        type="text"
        value={title}
        className="taskInput"
        placeholder="Add Task"
        required
      />
      <div className="buttons">
        <Button variant="text" type="submit" className="button-add">
        {edit ? <><EditIcon/>Edit</> :  <><AddIcon/>Add</>}
        </Button>
        <Button variant="text" onClick={clearList} className="button-clear"><ClearAllIcon /> Clear All</Button>
      </div>
    </form>
  );
};

export default TaskForm;
