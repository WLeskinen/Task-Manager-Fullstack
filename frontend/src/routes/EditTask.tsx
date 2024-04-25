import React from "react";
import axios, { AxiosResponse } from 'axios';
import { TaskModel } from "../models/taskModels";

// Task interface
interface Task extends TaskModel {}

interface EditTaskProps {
    editingTask: Task | null;
    setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const API_URL = "http://localhost:3000/api/tasks";

const EditTask: React.FC<EditTaskProps> = ({ editingTask, setEditingTask, setTasks }) => {
    // Function to edit a task
    const handleSaveChanges = async (updatedTask: Task) => {
        try {
            await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
            const response: AxiosResponse<Task[]> = await axios.get(API_URL);
            setTasks(response.data);
        } catch (error) {
            console.error("Error editing task:", error);
        }
    };
    return (
        editingTask && (
            <div>
              <div>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
                <h2>Edit {editingTask.name}</h2>
                {/* Form for editing task details */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveChanges(editingTask);
                  }}
                >
                  <div>
                    <label>
                      <strong>Name</strong>
                      <input
                        type="text"
                        value={editingTask.name}
                        onChange={(e) =>
                          setEditingTask({
                            ...editingTask,
                            name: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>Content</strong>
                      <textarea
                        value={editingTask.content}
                        onChange={(e) =>
                          setEditingTask({
                            ...editingTask,
                            content: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>Start Date</strong>
                      <input
                        type="date"
                        value={editingTask ? (editingTask.endDate ? editingTask.endDate.toISOString().split('T')[0] : '') : ''} 
                        onChange={(e) =>
                          setEditingTask({
                            ...editingTask,
                            startDate:new Date(e.target.value),
                          })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>End Date</strong>
                      <input
                        type="date"
                        value= {editingTask ? (editingTask.endDate ? editingTask.endDate.toISOString().split('T')[0] : '') : ''}
                        onChange={(e) =>
                          setEditingTask({
                            ...editingTask,
                            endDate: new Date(e.target.value),
                          })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>Tags</strong>
                      <input
                        type="text"
                        value={editingTask.tags}
                        onChange={(e) =>
                          setEditingTask({
                            ...editingTask,
                            tags: e.target.value.split(','),
                          })
                        }
                      />
                    </label>
                  </div>
                  <button type="submit">Save Changes</button>
                </form>
              </div>
            </div>
          )
    );
}

export default EditTask;
