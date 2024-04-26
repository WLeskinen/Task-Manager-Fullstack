import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-white text-center bg-primary py-9 font-ebrima">Task Manager</h1>
      <div className="flex justify-between bg-white px-3 py-4">
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
      <div className="bg-primary py-6 px-6">
        <div className="flex justify-between">
          <div>
            <h3 className="overview-heading text-white font-light font-corbel">Total Completed</h3>
            <h1 className="completion-rate text-6xl text-white font-bold">53%</h1>
          </div>
          <div>
            <h3 className="tasks-heading text-white font-light font-corbel">Tasks</h3>
            <div className="task-box">
              <p>Task 1</p>
              <p>Task 2</p>
              <p>Task 3</p>
            </div>
          </div>
          <div>
            <h3 className="activities-heading text-white font-light font-corbel">Activities</h3>
            <div className="activity-box">
              <p>Activity 1</p>
              <p>Activity 2</p>
              <p>Activity 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
