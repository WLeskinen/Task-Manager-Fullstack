import React from 'react';
import axios from 'axios';
import {TaskModel} from '../models/taskModels';

interface DeleteTaskProps {
  taskId: number;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  fetchTasks: () => void; 
}

const API_URL = "http://localhost:3000/api/tasks";

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, fetchTasks }) => { 
  const handleDeleteTask = async (taskId: number) => {
    try {
      const response = await axios.delete(`${API_URL}/${taskId}`);
      if (response.status === 200) {
        // Fetch tasks again to get the updated list of tasks
        fetchTasks();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <button onClick={() => handleDeleteTask(taskId)}>Delete</button>
  );
};

export default DeleteTask;