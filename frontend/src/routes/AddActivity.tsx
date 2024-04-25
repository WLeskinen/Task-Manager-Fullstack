import React from "react";
import axios, { AxiosResponse } from 'axios';
import { ActivityModel } from "../models/activityModels";

// Activity interface
interface Activity extends ActivityModel {}

interface AddActivityProps {
    newActivity: Activity | null;
    setNewActivity: React.Dispatch<React.SetStateAction<Activity | null>>;
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
}

const API_URL = "http://localhost:3000/api/activities";

const AddActivity: React.FC<AddActivityProps> = ({ newActivity, setNewActivity, setActivities }) => {
    // Function to add a new activity
    const handleAddActivity = async (newActivity: Activity) => {
        try {
            await axios.post(API_URL, newActivity);
            const response: AxiosResponse<Activity[]> = await axios.get(API_URL);
            setActivities(response.data);
        } catch (error) {
            console.error("Error adding activity:", error);
        }
    };
    return (
        newActivity && (
            <div>
              <h2>Add New Activity</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddActivity(newActivity);
                }}
              >
                {/* Form fields go here */}
                <div>
                  <label>
                    <strong>Title</strong>
                    <input
                      type="text"
                      value={newActivity.title || ''}
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
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
                      value={newActivity.description || ''}
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
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
                      value={newActivity.startDate ? newActivity.startDate.toISOString().split('T')[0] : ''}
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          startDate: new Date(e.target.value),
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
                      value={newActivity.endDate ? newActivity.endDate.toISOString().split('T')[0] : ''}
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          endDate: new Date(e.target.value),
                        })
                      }
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Status</strong>
                    <select
                      value={newActivity.status || ''}
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Activity Type</strong>
                    <input
                      type="text"
                      value={newActivity.activityType || ''}
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          activityType: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <button type="submit">Save</button>
              </form>
              <button onClick={() => setNewActivity(null)}>Cancel</button>
            </div>
          )
    );
  };

  export default AddActivity;