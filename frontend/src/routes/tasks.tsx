import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import AddTask from './addTask';
import EditTask from './editTask';
import DeleteTask from './deleteTask';
import { TaskModel } from "../models/taskModels";

const API_URL = "http://localhost:3000/api/tasks";

// Task interface
interface Task extends TaskModel {}

const Tasks: React.FC = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // State to hold new task
  const [newTask, setNewTask] = useState<Task | null>(null);
  // State to manage the task being edited
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Function to fetch all tasks from the API
  const fetchTasks = async () => {
    try {
      const response: AxiosResponse<Task[]> = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Use effect to fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <p>
        <button onClick={() => setNewTask({} as Task)}>Add New Task</button>
      </p>
      {/* Display the list of tasks */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Tag ID</th>
            <th>Activity Type ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id!}>
                <td>{task.name}</td>
                <td>{task.content}</td>
                <td>{task.start_date?.toString()}</td>
                <td>{task.end_date?.toString()}</td>
                <td>{task.status_id}</td>
                <td>{task.tag_id}</td>
                <td>{task.activity_type_id}</td>
                <td>
                  {/* Edit button */}
                  <button onClick={() => setEditingTask(task)}>Edit</button>
                  {/* Delete button */}
                  {task.id !== undefined && <DeleteTask taskId={task.id} setTasks={setTasks} />}
                </td>
              </tr>
            ))
          ) : (
            <tr key="no-tasks">
              <td colSpan={8}>You have no tasks, add a new task to get started!</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* New task form */}
      <AddTask newTask={newTask} setNewTask={setNewTask} setTasks={setTasks} />
      {/* Popup window that allows editing of the tasks */}
      <EditTask editingTask={editingTask} setEditingTask={setEditingTask} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;
