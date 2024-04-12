import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios, { AxiosResponse } from "axios";
import { TaskModel } from "../models/taskModels";

const API_URL = "http://localhost:3000/api/tasks";

// Task interface
interface Task extends TaskModel {}

const Tasks: React.FC = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // State to manage modal visibility
  const [showModal, setShowModal] = useState<boolean>(false);
 
  // State to manage the task being edited
  const [editingTask, setEditingTask] = useState<Task | null>(null);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response: AxiosResponse = await axios.get(API_URL);
        console.log(response);
        if (!response.data) return [];
        const data: TaskModel[] = response.data;
        setTasks(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchTasks();
  }, []);


  const handleEdit = (task: Task) => {
    // Opens the modal for editing the task
    setEditingTask(task);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    // Delete the task with the given id
    axios.delete(`${API_URL}/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  const closeModal = () => {
    setShowModal(false);
    // Closes the editing task state
    setEditingTask(null);
  };

  const createTask = async () => {
    const newTask = {
      id: "",
      name: "",
      content: "",
      startDate: new Date(),
      endDate: new Date(),
      tags: [],
    };

    const response: AxiosResponse = await axios.post(API_URL, newTask);
    const createdTask: TaskModel = response.data;
    setTasks([...tasks, createdTask]);
  };

  const updateTask = async (updateModel: Task) => {
    await axios.put(`${API_URL}/${updateModel.id}`, updateModel);
    const updatedTasks = tasks.map((task) =>
      task.id === updateModel.id ? updateModel : task
    );
    setTasks(updatedTasks);
  };


  return (
    <div>
      <h1>Tasks</h1>
      {/* Link to dashboard */}
      <Link to="/">Dashboard</Link>
      <br />
      <br />
      {/* Add Task button */}
       <button onClick={createTask}>Add Task</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.content}</td>
                <td>{task.status}</td>
                <td>{task.startDate ? task.startDate.toDateString() : ''}</td>
                <td>{task.endDate ? task.endDate.toLocaleDateString() : ''}</td>
                <td>
                  {/* Edit button */}
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  {/* Delete button */}
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>You have no tasks, add a new task to keep yourself in check!</td>
            </tr>
          )}


        </tbody>
      </table>
      {/* Popup window that allows editing of the tasks,  we'll have to make a new modal that adds a new task too. Currently covers both new and edit. */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Edit Task</h2>
            <p>You can edit the task here</p>
            {/* Form fields for changing tasks */}
            <input type="text" value={editingTask?.name} onChange={(e) => setEditingTask({ ...editingTask!, name: e.target.value })} />
            <input type="text" value={editingTask?.content} onChange={(e) => setEditingTask({ ...editingTask!, content: e.target.value })} />
            <select value={editingTask?.status || ''} onChange={(e) => setEditingTask({ ...editingTask!, status: e.target.value })}>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Stopped">On Hold</option>
            </select>
            <button onClick={() => updateTask(editingTask!)}>
              {editingTask?.id ? 'Save changes' : 'Create task'}
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
