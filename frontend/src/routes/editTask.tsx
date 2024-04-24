import React from "react";
import axios, { AxiosResponse } from "axios";
import { TaskModel } from "../models/taskModels";

// Task interface
interface Task extends TaskModel {}

interface EditTaskProps {
  editingTask: Task | null;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const API_URL = "http://localhost:3000/api/tasks";

const EditTask: React.FC<EditTaskProps> = ({
  editingTask,
  setEditingTask,
  setTasks,
}) => {
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
                  value={
                    editingTask && editingTask.start_date
                      ? editingTask.start_date.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setEditingTask({
                      ...(editingTask || {}),
                      ...{
                        start_date: new Date(e.target.value),
                      } as Task,
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
                  value={
                    editingTask && editingTask.end_date
                      ? editingTask.end_date.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setEditingTask({
                      ...(editingTask || {}),
                      ...{
                        end_date: new Date(e.target.value),
                      } as Task,
                    })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Status</strong>
                {editingTask ? (
                  <select
                    value={editingTask.status_id}
                    onChange={(e) =>
                      setEditingTask({
                        ...editingTask,
                        status_id: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value="1">Not Started</option>
                    <option value="2">In Progress</option>
                    <option value="3">Completed</option>
                  </select>
                ) : (
                  <p>Loading...</p>
                )}
              </label>
            </div>
            <div>
              <label>
                <strong>Tag ID</strong>
                <input
                  type="text"
                  value={editingTask.tag_id}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
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
                  value={editingTask.activity_type_id}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      activity_type_id: parseInt(e.target.value),
                    })
                  }
                />
              </label>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditTask;
