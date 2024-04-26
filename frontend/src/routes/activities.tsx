import React, { useState, useEffect } from "react";
import { ActivityModel } from "../models/activityModels";
import axios, { AxiosResponse } from "axios";
import { Table } from 'react-bootstrap';
import AddActivity from './AddActivity';
import EditActivity from './EditActivity';
import DeleteActivity from './DeleteActivity';
import NavBar from './navBar';

const API_URL = "http://localhost:3000/api/activities";

// Activity interface
interface Activity extends ActivityModel {}

const Activities: React.FC = () => {
  // State to hold activities
  const [activities, setActivities] = useState<Activity[]>([]);
  // State to hold new activity
  const [newActivity, setNewActivity] = useState<Activity | null>(null);
  // State to manage the activity being edited
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);


  // Function to fetch all activities from the API
  const fetchActivities = async () => {
    try {
      const response: AxiosResponse<Activity[]> = await axios.get(API_URL);
      setActivities(response.data);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  // Use effect to fetch activities when the component mounts
  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="text-7xl font-bold text-white text-center bg-primary py-9 font-ebrima">Activities</h1>
      <div className="flex justify-start items-center p-4">
        <button onClick={() => setNewActivity({} as Activity)}
        className="font-bold font-ebrima p-3 rounded-lg mr-4 relative overflow-hidden hover:border-red-500 border-2 transition-all duration-200"
        style={{ fontSize: '22px' }}
        >Add New Activity</button>
      </div>
      {/* Display the list of activities */}
      <Table>
      <thead className="font-bold font-ebrima bg-slash text-white" style={{ fontSize: '30px', tableLayout: 'fixed', width: '100%' }}>
          <tr>
            <th style={{ width: '14.28%' }}>Title</th>
            <th style={{ width: '14.28%' }}>Description</th>
            <th style={{ width: '14.28%' }}>Start Date</th>
            <th style={{ width: '14.28%' }}>End Date</th>
            <th style={{ width: '14.28%' }}>Status</th>
            <th style={{ width: '14.28%' }}>Tags</th>
            <th style={{ width: '14.28%' }}>Activity Type</th>
            <th style={{ width: '14.28%' }}>Options</th>
          </tr>
        </thead>
        <tbody className="font-bold font-ebrima bg-secondary text-primary" style={{ fontSize: '30px', tableLayout: 'fixed', width: '100%' }}>
          {activities.length > 0 ? (
            activities.map((activity) => (
              <tr key={activity.id!}>
                <td style={{ width: '14.28%' }}>{activity.title}</td>
                <td style={{ width: '14.28%' }}>{activity.description}</td>
                <td style={{ width: '14.28%' }}>{activity.startDate?.toString()}</td>
                <td style={{ width: '14.28%' }}>{activity.endDate?.toString()}</td>
                <td style={{ width: '14.28%' }}>{activity.status}</td>
                <td style={{ width: '14.28%' }}>{Array.isArray(activity.tags) ? activity.tags.join(", ") : activity.tags}</td>
                <td style={{ width: '14.28%' }}>{activity.activityType}</td>
                <td>
                  {/* Edit button */}
                  <button onClick={() => setEditingActivity(activity)}>Edit</button>
                  {/* Delete button */}
                  {activity.id !== undefined && <DeleteActivity activityId={activity.id} setActivities={setActivities} />}
                </td>
              </tr>
            ))
          ) : (
            <tr key="no-activities">
              <td colSpan={7}>You have no activities, add a new activity to keep yourself in check!</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* New activity form */}
      <AddActivity newActivity={newActivity} setNewActivity={setNewActivity} setActivities={setActivities} />
      {/* Popup window that allows editing of the activities */}
      <EditActivity editingActivity={editingActivity} setEditingActivity={setEditingActivity} setActivities={setActivities} />
    </div>
  );
};

export default Activities;
