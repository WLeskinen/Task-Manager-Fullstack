import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Dashboard: React.FC = () => {
  return (
    <div>
<h1 className="text-7xl font-bold text-white text-center bg-primary py-9 font-ebrima">Task Manager</h1>
      <div>
      <div className="flex justify-between bg-white px-6 py-4">
      <div className="flex-1 bg-secondary text-center text-primary text-4xl font-bold font-ebrima p-4 rounded-lg mr-4">
      <Link to="/tasks" className="select-box">Tasks</Link>
      </div>
        <div className="flex-1 bg-secondary text-center text-primary text-4xl font-bold font-ebrima p-4 rounded-lg mr-4">
        <Link to="/activities">Activities</Link>
      </div>
        <div className="flex-1 bg-secondary text-center text-primary text-4xl font-bold font-ebrima p-4 rounded-xl">
        <Link to="/statistics">Statistics</Link>
      </div>
    </div>
      </div>
      <div className="overview-info">
        <h3 className="overview-heading">Total Completed</h3>
        {/* Placeholder for overview information */}
        <h1 className="completion-rate">53%</h1>
      </div>
      <div>
      <h3 className="tasks-heading">Tasks</h3>
      <p>Task 1</p>
      <p>Task 2</p>
      <p>Task 3</p>
      </div>
      <div>
      <h3 className="activities-heading">Activities</h3>
      <p>Activity 1</p>
      <p>Activity 2</p>
      <p>Activity 3</p>
      </div>
    </div>
  );
};

export default Dashboard;
