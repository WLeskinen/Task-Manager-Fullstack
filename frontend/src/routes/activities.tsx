import { useState } from "react";
import { Link } from 'react-router-dom';


// Activity interface
interface Activity {
  id: number;
  name: string;
  activityType: string;
  startDate: string;
  endDate: string;
}

const Activities = () => {
  // State to hold activities
  const [activities, setActivities] = useState<Activity[]>([]);
  // State to manage modal visibility
  const [EditingActivity, setEditingActivity] = useState<boolean>(false);
  // State to manage the activity being edited
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);


   // Function for editing an activity
   const handleEditActivity = (activity: Activity) => {
    setCurrentActivity(activity);
    setEditingActivity(true);
  };


  // Function to delete an activity
  const handleDeleteActivity = (activityId: number) => {
    // Remove the activity with the given ID
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== activityId)
    );
  };


  // Function to save the changes made to the activity
  const handleSaveChanges = () => {
    if (currentActivity) {
      // Updates the activity in the activities list
      setActivities((prevActivities) =>
        prevActivities.map((activity) =>
          activity.id === currentActivity.id ? currentActivity : activity
        )
      );
      setEditingActivity(false);
    }
  };


    // Placeholder data
  const placeholderActivities: Activity[] = [
    {
      id: 1,
      name: "Activity 1",
      activityType: "Work",
      startDate: "2024-04-01",
      endDate: "2024-04-01",
    },
    {
      id: 2,
      name: "Activity 2",
      activityType: "School",
      startDate: "2024-04-01",
      endDate: "2024-04-01",
    },
    {
      id: 3,
      name: "Activity 3",
      activityType: "Personal",
      startDate: "2024-04-01",
      endDate: "2024-04-01",
    },
  ];

  useState(() => {
    setActivities(placeholderActivities);
  }, );
 
  return (
    <div>
      <h1>Activities</h1>
      {/* Link to dashboard */}
      <Link to="/">Dashboard</Link>
      <p>
      <button onClick={() => setEditingActivity(true)}>Add New Activity</button>
      </p>
    {/* Display the list of activities */}
      <div>
        {activities.length === 0 ? (
        <p>You currently have no activities. Add a new one!</p>
        ) : (
        activities.map((activity) => (
          <div key={activity.id}>
            <h4>{activity.name}</h4>
              <strong>Type</strong> {activity.activityType}
              <p>
              <strong>Start Date</strong> {activity.startDate}
              </p>
              <strong>End Date</strong> {activity.endDate}
               <p>
               </p>
            <div>
              {/* Edit button */}
              <button onClick={() => handleEditActivity(activity)}>Edit</button>
              {/* Delete button */}
              <button onClick={() => handleDeleteActivity(activity.id)}>Delete</button>
            </div>
          </div>
         ))
        )}

      </div>
      {/* Popup window that allows editing of the tasks */}
      {EditingActivity && (
        <div>
          <div>
            <button onClick={() => setEditingActivity(false)}>x</button>
            <h2>Edit Activity</h2>
            {/* Form for editing activity details */}
            <form onSubmit={(e) => { e.preventDefault(); handleSaveChanges();}}>
              <div>
                <label>Name</label>
                <input type="text" value={currentActivity?.name} onChange={(e) => setCurrentActivity({...currentActivity!, name: e.target.value,}) } required/>
              </div>
              <div className="mb-4">
                <label>Type</label>
                <select value={currentActivity?.activityType} onChange={(e) => setCurrentActivity({...currentActivity!, activityType: e.target.value,})}>
                  <option value="Work">Work</option>
                  <option value="School">School</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
              <div>
                <label>Start Date</label>
                <input type="date" value={currentActivity?.startDate} onChange={(e) =>setCurrentActivity({...currentActivity!,startDate: e.target.value,})}required/>
              </div>
              <div>
                <label>End Date</label>
                <input type="date" value={currentActivity?.endDate} onChange={(e) => setCurrentActivity({...currentActivity!, endDate: e.target.value, })}/>
              </div>
              <div>
                {/* Save/Cancel button */}
                <button>Save Changes</button>
                <button onClick={() => setEditingActivity(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
