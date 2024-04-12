import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //to be used later

// Define a Task interface
interface Task {
  id: number;
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  status: string;
  activityId: number;
}

const Tasks: React.FC = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // State to manage modal visibility
  const [showModal, setShowModal] = useState<boolean>(false);
 
  // State to manage the task being edited
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Placeholder tasks data
  const placeholderTasks: Task[] = [
    {
      id: 1,
      name: 'Task 1',
      details: 'test',
      startDate: '1.4.2024',
      endDate: '1.4.2024',
      status: 'Completed',
      activityId: 1,
    },
    {
      id: 2,
      name: 'Task 2',
      details: 'test',
      startDate: '1.4.2024',
      endDate: '1.4.2024',
      status: 'In Progress',
      activityId: 2,
    },
  ];

  useEffect(() => {
    // Set placeholder tasks to state
    setTasks(placeholderTasks);
  }, []);

  const handleDelete = (id: number) => {
    // Delete the task with the given id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task: Task) => {
    // Open the modal for editing the task
    setEditingTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Clear the editing task state
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Tasks</h1>
      {/* Add Task button */}
      <button onClick={() => setShowModal(true)}>Add Task</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.details}</td>
                <td>{task.status}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.status}</td>
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
              <td colSpan={4}>You have no tasks, add a new task to keep yourself in check!.</td>
            </tr>
          )}


        </tbody>
      </table>
      {/* Popup window that allows one to edit the tasks, currently WIP */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Edit Task</h2>
            <p>You can edit the task here</p>
            {/* Form fields for changing tasks */}
            <input type="text" value={editingTask?.name} onChange={(e) => setEditingTask({ ...editingTask!, name: e.target.value })} />
            <input type="text" value={editingTask?.details} onChange={(e) => setEditingTask({ ...editingTask!, details: e.target.value })} />
            <select value={editingTask?.status || ''} onChange={(e) => setEditingTask({ ...editingTask!, status: e.target.value })}>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Stopped">Pending</option>
            </select>
            <button onClick={closeModal}>Save and Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
