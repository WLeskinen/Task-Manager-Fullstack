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
          <h2 className="text-2xl font-bold text-primary py-4 font-ebrima">Add New Task</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTask(newTask);
            }}
          >
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
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
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Content</strong>
                  <textarea
                    value={newTask.content || ''}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
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
                    value={newTask.startDate ? newTask.startDate.toDateString().split('T')[0] : ''}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
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
                    value={newTask.endDate ? newTask.endDate.toDateString().split('T')[0] : ''}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
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
                  <select
                    value={newTask.status || ''}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        status: e.target.value,
                      })
                    }
                    className="border-black border rounded p-2 w-full"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Tags</strong>
                  <input
                    type="text"
                    value={newTask.tags || ''}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        tags: e.target.value.split(','),
                      })
                    }
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
            </div>
            
            {/* Buttons div */}
            <div className="flex justify-start items-center p-4">
              <button
                type="submit"
                className="font-bold font-ebrima p-3 rounded-lg mr-4 relative overflow-hidden hover:border-red-500 border-2 transition-all duration-200"
              >
                Add Task
              </button>
              <button
                onClick={() => setNewTask(null)}
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


export default AddTask;
