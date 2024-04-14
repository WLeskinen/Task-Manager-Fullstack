import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// Task interface
interface Task {
  id: number;
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  status: string;
}


const Tasks: React.FC = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // State to manage the edit modal visibility
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // State to manage edit modal visibility
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // State to manage the task being edited
  const [editingTask, setEditingTask] = useState<Task>({ id: 0, name: "", details: "", startDate: "", endDate: "", status: "" });

  // State to manage the task being added
  const [addingTask, setAddingTask] = useState<Task>({ id: 0, name: "", details: "", startDate: "", endDate: "", status: "" });


  useEffect(() => {
    // Fetch tasks from the backend.
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };


  const handleEdit = (task: Task) => {
    // Opens the modal for editing the task
    setEditingTask(task);
    setShowEditModal(true);
  };

  // Delets a task from the database and the application.
  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'DELETE'
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  const handleAdd = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addingTask)
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      const data = await response.json();
      setTasks([...tasks, data]);
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

    // Handles the tasks that get saved new task
    const handleEditSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${editingTask!.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingTask)
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      const data = await response.json();
      setTasks(tasks.map(task => (task.id === data.id ? data : task)));
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
    

  const closeEditModal = () => {
    setShowEditModal(false);
    // Closes the editing task state
    setEditingTask({ id: 0, name: "", details: "", startDate: "", endDate: "", status: "" });
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    // Closes the adding task state
    setAddingTask({ id: 0, name: "", details: "", startDate: "", endDate: "", status: "" });
  };

  return (
    <div>
      <h1>Tasks</h1>
      {/* Link to dashboard */}
      <Link to="/">Dashboard</Link>
      <br />
      <br />
      {/* Add Task button */}
      <button onClick={ () => setShowAddModal(true)}>Add Task</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.details}</td>
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
              <td colSpan={4}>You have no tasks, add a new task to keep yourself in check!</td>
            </tr>
          )}


        </tbody>
      </table>
      {/* Popup window that allows editing of the tasks,  we'll have to make a new modal that adds a new task too. Currently covers both new and edit. */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>&times;</span>
            <h2>Edit Task</h2>
            <p>You can edit the task here</p>
            {/* Form fields for changing tasks */}
            <input type="text" value={editingTask?.name} onChange={(e) => setEditingTask({ ...editingTask!, name: e.target.value })} />
            <input type="text" value={editingTask?.details} onChange={(e) => setEditingTask({ ...editingTask!, details: e.target.value })} />
            <label> Start Date: <input type="date" value={editingTask?.startDate} onChange={(e) => setEditingTask({ ...editingTask!, startDate: e.target.value })} /> </label>
            <label> End Date: <input type="date" value={editingTask?.endDate} onChange={(e) => setEditingTask({ ...editingTask!, endDate: e.target.value })} /> </label>
            <select value={editingTask?.status || ''} onChange={(e) => setEditingTask({ ...editingTask!, status: e.target.value })}>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Stopped">On Hold</option>
            </select>
            <button onClick={handleEditSave}>Save</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </div>
      )}

      
      {/* Popup window that allows adding new task */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAddModal}>&times;</span>
            <h2>Add a new task!</h2>
            <p>You can add a new task here</p>
            {/* Form fields for changing tasks */}
            <input type="text" value={addingTask?.name} onChange={(e) => setAddingTask({ ...addingTask!, name: e.target.value })} />
            <input type="text" value={addingTask?.details} onChange={(e) => setAddingTask({ ...addingTask!, details: e.target.value })} />
            <label> Start Date: <input type="date" value={addingTask?.startDate} onChange={(e) => setAddingTask({ ...addingTask!, startDate: e.target.value })} /> </label>
            <label> End Date: <input type="date" value={addingTask?.endDate} onChange={(e) => setAddingTask({ ...addingTask!, endDate: e.target.value })} /> </label>
            <select value={addingTask?.status || ''} onChange={(e) => setAddingTask({ ...addingTask!, status: e.target.value })}>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Stopped">On Hold</option>
            </select>
            <button onClick={handleAdd}>Save</button>
            <button onClick={closeAddModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;