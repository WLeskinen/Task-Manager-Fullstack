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
          <div className="text-2xl font-bold text-primary py-4 font-ebrima">
            Edit {editingActivity.title}
          </div>
          {/* Form for editing activity details */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveChanges(editingActivity);
            }}
          >
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
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
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Description</strong>
                  <textarea
                    value={editingActivity.description}
                    onChange={(e) =>
                      setEditingActivity({
                        ...editingActivity,
                        description: e.target.value,
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
                    value={editingActivity ? (editingActivity.startDate ? editingActivity.startDate.toISOString().split('T')[0] : '') : ''}
                    onChange={(e) =>
                      setEditingActivity({
                        ...(editingActivity || {}),
                        ...{
                          startDate: new Date(e.target.value),
                        }
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
                    value={editingActivity ? (editingActivity.endDate ? editingActivity.endDate.toISOString().split('T')[0] : '') : ''}
                    onChange={(e) =>
                      setEditingActivity({
                        ...(editingActivity || {}),
                        ...{
                          endDate: new Date(e.target.value),
                        }
                      })
                    }
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
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
                onClick={() => setEditingActivity(null)}
                className="font-bold font-ebrima p-3 rounded-lg relative overflow-hidden hover:border-red-500 border-2 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )
    );
    };

    export default EditActivity;