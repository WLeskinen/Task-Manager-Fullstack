import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="dashboard-title">Task Manager</h1>
      <div className="dashboard-grid">
        <div className="select-box">
          <h2><Link to="/tasks" className="select-box">Tasks</Link></h2>
          {/* Placeholder for tasks */}
        </div>
        <div className="select-box" className="select-box">
        <h2><Link to="/activities">Activities</Link></h2>
          {/* Placeholder for activities */}
        </div>
        <div className="select-box" >
          <h2><Link to ="/statistics">Statistics / Analytics</Link></h2>
          {/* Placeholder for statistics */}
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
