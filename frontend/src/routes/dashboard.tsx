import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <div className="dashboard-grid">
        <div className="dashboard-block">
          <h2><Link to="/tasks">Tasks</Link></h2>
          {/* Placeholder for tasks */}
        </div>
        <div className="dashboard-block">
        <h2><Link to="/activities">Activities</Link></h2>
          {/* Placeholder for activities */}
        </div>
        <div className="dashboard-block">
          <h2><Link to ="/statistics">Statistics / Analytics</Link></h2>
          {/* Placeholder for statistics */}
        </div>
      </div>
      <div className="overview-info">
        <h3>Total Completed</h3>
        {/* Placeholder for overview information */}
        <h1>53%</h1>
      </div>
      <div>
      <h3>Tasks</h3>
      <p>Task 1</p>
      <p>Task 2</p>
      <p>Task 3</p>
      </div>
      <div>
      <h3>Activities</h3>
      <p>Activity 1</p>
      <p>Activity 2</p>
      <p>Activity 3</p>
      </div>
    </div>
  );
};

export default Dashboard;
