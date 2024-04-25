// NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
