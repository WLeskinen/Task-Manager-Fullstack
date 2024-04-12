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
          <h2>Activities</h2>
          {/* Placeholder for activities */}
        </div>
        <div className="dashboard-block">
          <h2>Statistics / Analytics</h2>
          {/* Placeholder for statistics */}
        </div>
      </div>
      <div className="overview-info">
        <h2>Overview</h2>
        {/* Placeholder for overview information */}
      </div>
    </div>
  );
};

export default Dashboard;
