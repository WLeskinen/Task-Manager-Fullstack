import React from "react";
import axios, { AxiosResponse } from 'axios';
import { TaskModel } from "../models/taskModels";

// Task interface
interface Task extends TaskModel {}

interface AddTaskProps {
    newTask: Task | null;
    setNewTask: React.Dispatch<React.SetStateAction<Task | null>>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const API_URL = "http://localhost:3000/api/tasks";

const AddTask: React.FC<AddTaskProps> = ({ newTask, setNewTask, setTasks }) => {
    // Function to add a new task
    const handleAddTask = async (newTask: Task) => {
        try {
            await axios.post(API_URL, newTask);
            const response: AxiosResponse<Task[]> = await axios.get(API_URL);
            setTasks(response.data);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };
    return (
        newTask && (
            <div>
              <h2>Add New Task</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddTask(newTask);
                }}
              >
                {/* Form fields go here */}
                <div>
                  <label>
                    <strong>Name</strong>
                    <input
                      type="text"
                      value={newTask.name || ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
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
                      value={newTask.content || ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
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
                      value={newTask.start_date ? newTask.start_date.toISOString().split('T')[0] : ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          start_date: new Date(e.target.value),
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
                      value={newTask.end_date ? newTask.end_date.toISOString().split('T')[0] : ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          end_date: new Date(e.target.value),
                        })
                      }
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Status</strong>
                    <input
                      type="text"
                      value={newTask.status_id || ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          status_id: parseInt(e.target.value),
                        })
                      }
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Tag ID</strong>
                    <input
                      type="text"
                      value={newTask.tag_id || ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          tag_id: parseInt(e.target.value),
                        })
                      }
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Activity Type ID</strong>
                    <input
                      type="text"
                      value={newTask.activity_type_id || ''}
                      onChange={(e) =>
                        setNewTask({
                          ...newTask,
                          activity_type_id: parseInt(e.target.value),
                        })
                      }
                    />
                  </label>
                </div>
                <button type="submit">Save</button>
              </form>
              <button onClick={() => setNewTask(null)}>Cancel</button>
            </div>
          )
    );
  };

  export default AddTask;
