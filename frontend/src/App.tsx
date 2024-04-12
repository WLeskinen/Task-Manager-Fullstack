import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './routes/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Define other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
