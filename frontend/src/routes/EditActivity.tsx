import React from "react";
import axios, {AxiosResponse} from "axios";
import { ActivityModel } from "../models/activityModels";

// Activity interface
interface Activity extends ActivityModel {}

interface EditActivityProps {
    editingActivity: Activity | null;
    setEditingActivity: React.Dispatch<React.SetStateAction<Activity | null>>;
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
}

const API_URL = "http://localhost:3000/api/activities";

const EditActivity: React.FC<EditActivityProps> = ({ editingActivity, setEditingActivity, setActivities }) => {
    // Function to edit an activity
    const handleSaveChanges = async (updatedActivity: Activity) => {
        try {
            await axios.put(`${API_URL}/${updatedActivity.id}`, updatedActivity);
            const response: AxiosResponse<Activity[]> = await axios.get(API_URL);
            setActivities(response.data);
        } catch (error) {
            console.error("Error editing activity:", error);
        }
    };
    return (
        editingActivity && (
            <div>
              <div>
              <button onClick={() => setEditingActivity(null)}>Cancel</button>
                <h2>Edit {editingActivity.title}</h2>
                {/* Form for editing activity details */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveChanges(editingActivity);
                  }}
                >
                  <div>
                    <label>
                      <strong>Title</strong>
                      <input
                        type="text"
                        value={editingActivity.title}
                        onChange={(e) =>
                          setEditingActivity({
                            ...editingActivity,
                            title: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>Description</strong>
                      <textarea
                        value={editingActivity.description}
                        onChange={(e) =>
                          setEditingActivity({
                            ...editingActivity,
                            description: e.target.value,
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
                        value={editingActivity ? (editingActivity.startDate ? editingActivity.startDate.toISOString().split('T')[0] : '') : ''}
                        onChange={(e) =>
                        setEditingActivity({
                        ...(editingActivity || {}),
                        ...{
                        startDate: new Date(e.target.value),
                        }as Activity,
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
                        value={editingActivity ? (editingActivity.endDate ? editingActivity.endDate.toISOString().split('T')[0] : '') : ''}
                        onChange={(e) =>
                        setEditingActivity({
                        ...(editingActivity || {}),
                        ...{
                        endDate: new Date(e.target.value),
                        }as Activity,
                       })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>Status</strong>
                      {editingActivity ? (
                      <select
                        value={editingActivity.status}
                        onChange={(e) =>
                          setEditingActivity({
                            ...editingActivity,
                            status: e.target.value,
                          })
                        }
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
                  <div>
                    <label>
                      <strong>Activity Type</strong>
                      <input
                        type="text"
                        value={editingActivity.activityType}
                        onChange={(e) =>
                          setEditingActivity({
                            ...editingActivity,
                            activityType: e.target.value,
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

    export default EditActivity;