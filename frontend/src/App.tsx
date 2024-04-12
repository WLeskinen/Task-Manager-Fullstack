import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './routes/dashboard';
import Tasks from './routes/tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Define other routes here if needed */}
        <Route path="/tasks" element={<Tasks />} />
        
      </Routes>
    </Router>
  );
}

export default App;
