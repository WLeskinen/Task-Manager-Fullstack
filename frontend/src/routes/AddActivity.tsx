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
          <h2 className="text-2xl font-bold text-primary py-4 font-ebrima">Add New Activity</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddActivity(newActivity);
            }}
          >
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
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
                    className="border-black border rounded p-2 w-full"
                  />
                </label>
              </div>
              <div className="w-1/2 px-2">
                <label className="font-bold font-ebrima text-primary block mb-2">
                  <strong>Description</strong>
                  <textarea
                    value={newActivity.description || ''}
                    onChange={(e) =>
                      setNewActivity({
                        ...newActivity,
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
                    value={newActivity.startDate ? newActivity.startDate.toISOString().split('T')[0] : ''}
                    onChange={(e) =>
                      setNewActivity({
                        ...newActivity,
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
                    value={newActivity.endDate ? newActivity.endDate.toISOString().split('T')[0] : ''}
                    onChange={(e) =>
                      setNewActivity({
                        ...newActivity,
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
                    value={newActivity.status || ''}
                    onChange={(e) =>
                      setNewActivity({
                        ...newActivity,
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
                Save
              </button>
              <button
                onClick={() => setNewActivity(null)}
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

  export default AddActivity;