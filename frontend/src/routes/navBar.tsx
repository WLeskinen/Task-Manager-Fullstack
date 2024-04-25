import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/statistics">Statistics</Link>
      </ul>
    </nav>
  );
};

export default NavBar;