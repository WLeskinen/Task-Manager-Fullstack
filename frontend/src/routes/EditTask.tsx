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
          <div className="text-2xl font-bold text-primary py-4 font-ebrima">
            Edit {editingTask.name}
          </div>
          {/* Form for editing task details */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveChanges(editingTask);
            }}
          >
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
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
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Content</strong>
                  <textarea
                    value={editingTask.content}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        content: e.target.value,
                      })
                    }
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Start Date</strong>
                  <input
                    type="date"
                    value={editingTask ? (editingTask.endDate ? editingTask.endDate.toISOString().split('T')[0] : '') : ''}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        startDate: new Date(e.target.value),
                      })
                    }
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>End Date</strong>
                  <input
                    type="date"
                    value={editingTask ? (editingTask.endDate ? editingTask.endDate.toISOString().split('T')[0] : '') : ''}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        endDate: new Date(e.target.value),
                      })
                    }
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Status</strong>
                  {editingTask ? (
                    <select
                      value={editingTask.status}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          status: e.target.value,
                        })
                      }
                      className="border-black border rounded p-2 w-full"
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  ) : (
                    <p>Loading...</p>
                  )}
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
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
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-start items-center p-4">
              <button
                type="submit"
                className="font-bold font-ebrima p-3 rounded-lg mr-4 relative overflow-hidden hover:border-red-500 border-2 transition-all duration-200"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingTask(null)}
                className="font-bold font-ebrima p-3 rounded-lg relative overflow-hidden hover:border-red-500 border-2 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )
    );
}

export default EditTask;
