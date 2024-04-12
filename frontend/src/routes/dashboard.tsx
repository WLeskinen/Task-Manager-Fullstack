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
        <h2>Overview</h2>
        {/* Placeholder for overview information */}
        <p>Additional details about stats etc. Will be added here later</p>
      </div>
    </div>
  );
};

export default Dashboard;
