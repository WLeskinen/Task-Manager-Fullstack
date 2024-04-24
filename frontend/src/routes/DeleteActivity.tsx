import React from 'react';
import axios from 'axios';
import {ActivityModel} from '../models/activityModels';

interface DeleteActivityProps {
  activityId: number;
  setActivities: React.Dispatch<React.SetStateAction<ActivityModel[]>>;
}

const API_URL = "http://localhost:3000/api/activities";

const DeleteActivity: React.FC<DeleteActivityProps> = ({ activityId, setActivities }) => {
  // Function to delete an activity
  const handleDeleteActivity = async (activityId: number) => {
    try {
      await axios.delete(`${API_URL}/${activityId}`);
      setActivities((prevActivities) =>
        prevActivities.filter((activity) => activity.id !== activityId)
      );
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  return (
    <button onClick={() => handleDeleteActivity(activityId)}>Delete</button>
  );
};

export default DeleteActivity;