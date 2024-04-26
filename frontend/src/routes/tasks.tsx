import React, { useState, useEffect } from "react";
import { TaskModel } from "../models/taskModels";
import axios, { AxiosResponse } from "axios";
import { Table } from 'react-bootstrap';
import AddTask from './AddTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { format, parseISO } from 'date-fns';
import NavBar from './navBar';

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
      <NavBar />
      <h1 className="text-7xl font-bold text-white text-center bg-primary py-9 font-ebrima">Tasks</h1>
      <p>
        <button onClick={() => setNewTask({} as Task)}>Add New Task</button>
      </p>
      {/* Display the list of tasks */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Tags</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id!}>
                <td>{task.name}</td>
                <td>{task.content}</td>
                <td>{task.startDate ? format(parseISO(task.startDate.toDateString()), 'dd/MM/yyyy') : ''}</td>
                <td>{task.endDate ? format(parseISO(task.endDate.toString()), 'dd/MM/yyyy') : ''}</td>
                <td>{task.status}</td>
                <td>{Array.isArray(task.tags) ? task.tags.join(", ") : task.tags}</td>
                <td>
                  {/* Edit button */}
                  <button onClick={() => setEditingTask(task)}>Edit</button>
                  {/* Delete button */}
                  <DeleteTask taskId={Number(task.id)} setTasks={setTasks} fetchTasks={fetchTasks} />
                </td>
              </tr>
            ))
          ) : (
            <tr key="no-tasks">
              <td colSpan={5}>You have no tasks, add a new task to keep yourself in check!</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* New task form */}
      <AddTask newTask={newTask} setNewTask={setNewTask} setTasks={setTasks} />
      {/* Popup window that allows editing of the tasks */}
      <EditTask editingTask={editingTask} setEditingTask={setEditingTask} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;