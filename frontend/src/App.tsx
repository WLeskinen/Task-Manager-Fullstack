import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './routes/navBar';
import Dashboard from './routes/dashboard';
import Tasks from './routes/tasks';
import Activities from './routes/activities';
import Statistics from './routes/statistics';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;
