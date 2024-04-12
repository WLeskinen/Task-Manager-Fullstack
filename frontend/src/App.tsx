import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './routes/dashboard';
import Tasks from './routes/tasks';
import Activities from './routes/activities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Define other routes here if needed */}
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </Router>
  );
}

export default App;
