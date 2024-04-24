import React from 'react';
import axios from 'axios';
import { TaskModel } from '../models/taskModels';

interface DeleteTaskProps {
  taskId: number;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const API_URL = "http://localhost:3000/api/tasks";

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, setTasks }) => {
  // Function to delete a task
  const handleDeleteTask = async (taskId: number) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <button onClick={() => handleDeleteTask(taskId)}>Delete</button>
  );
};

export default DeleteTask;
