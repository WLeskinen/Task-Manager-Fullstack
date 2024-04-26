import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-white text-center bg-primary py-9 font-ebrima">Task Manager</h1>
      <div className="flex justify-between bg-white px-3 py-10">
        <Link to="/tasks" className="flex-1 bg-secondary text-center text-primary text-4xl font-bold font-ebrima p-4 rounded-lg mr-4 relative overflow-hidden hover:border-red-500 border-2 transition-all duration 200">
          Tasks
        </Link>
        <Link to="/activities" className="flex-1 bg-secondary text-center text-primary text-4xl font-bold font-ebrima p-4 rounded-lg mr-4 relative overflow-hidden hover:border-red-500 border-2 transition-all duration 200">
          Activities
        </Link>
        <Link to="/statistics" className="flex-1 bg-secondary text-center text-primary text-4xl font-bold font-ebrima p-4 rounded-lg mr-4 relative overflow-hidden hover:border-red-500 border-2 transition-all duration 200">
          Statistics
        </Link>
      </div>
      <div className="bg-primary py-16 px-6">
        <div className="flex justify-between">
          <div>
            <h3 className="overview-heading text-white font-light font-corbel" style={{ fontSize: '45px' }}>Total Completed</h3>
            <h1 className="completion-rate text-6xl text-white font-bold" style={{ fontSize: '300px' }}>53%</h1>
            <br />
          </div>
          <div>
            <h3 className="tasks-heading text-white font-light font-corbel" style={{ fontSize: '45px' }}>Tasks</h3>
            <div className="task-box">
              <p className="bg-box border-2 border-outline text-text text-xl w-box h-box align-left p-5 rounded-lg mb-4">Prepare Agenda</p>
              <p className="bg-box border-2 border-outline text-text text-xl w-box h-box align-left p-5 rounded-lg mb-4">Send Invitations</p>
              <p className="bg-box border-2 border-outline text-text text-xl w-box h-box align-left p-5 rounded-lg mb-4">Create Presentation Slides</p>
              <br />
            </div>
          </div>
          <div>
            <h3 className="activities-heading text-white font-light font-corbel" style={{ fontSize: '45px' }}>Activities</h3>
            <div className="activity-box">
              <p className="bg-box border-2 border-outline text-text text-xl w-box h-box align-left p-5 rounded-lg mb-4">Team Meeting</p>
              <p className="bg-box border-2 border-outline text-text text-xl w-box h-box align-left p-5 rounded-lg mb-4">Product Demo</p>
              <p className="bg-box border-2 border-outline text-text text-xl w-box h-box align-left p-5 rounded-lg mb-4">Workshop on Time Management</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
