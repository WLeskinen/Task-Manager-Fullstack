import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ActivityModel } from "../models/activityModels";
import axios, { AxiosResponse } from "axios";
import { Table } from 'react-bootstrap';
import AddActivity from './AddActivity';
import EditActivity from './EditActivity';
import DeleteActivity from './DeleteActivity';

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
      <h1>Activities</h1>
      {/* Link to dashboard */}
      <Link to="/"> Dashboard</Link>
      <p>
        <button onClick={() => setNewActivity({} as Activity)}>Add New Activity</button>
      </p>
      {/* Display the list of activities */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Tags</th>
            <th>Activity Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.length > 0 ? (
            activities.map((activity) => (
              <tr key={activity.id!}>
                <td>{activity.title}</td>
                <td>{activity.description}</td>
                <td>{activity.startDate?.toString()}</td>
                <td>{activity.endDate?.toString()}</td>
                <td>{activity.status}</td>
                <td>{Array.isArray(activity.tags) ? activity.tags.join(", ") : activity.tags}</td>
                <td>{activity.activityType}</td>
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
