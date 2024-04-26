import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-navBar text-text font-corbel items-center px-4 py-5" style={{ fontSize: '30px' }}>
      <Link to="/" className="hover:text-slash mr-7 transition-colors duration-300">Home</Link>
      <Link to="/tasks" className="hover:text-slash mr-7 transition-colors duration-300">Tasks</Link>
      <Link to="/activities" className="hover:text-slash mr-7 transition-colors duration-300">Activities</Link>
      <Link to="/statistics" className="hover:text-slash mr-7 transition-colors duration-300">Statistics</Link>
    </nav>
  );
};

export default NavBar;
