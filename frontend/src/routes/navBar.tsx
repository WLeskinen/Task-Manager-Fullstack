import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-navBar text-text font-corbel items-center px-4" style={{ fontSize: '30px' }}>
      <Link to="/" className="hover:text-slash mr-7">Home</Link>
      <Link to="/tasks" className="hover:text-slash mr-7">Tasks</Link>
      <Link to="/activities" className="hover:text-slash mr-7">Activities</Link>
      <Link to="/statistics" className="hover:text-slash mr-7">Statistics</Link>
    </nav>
  );
};

export default NavBar;
