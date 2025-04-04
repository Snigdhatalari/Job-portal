import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import CompanyDashboard from './pages/CompanyDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/dashboard" element={<CompanyDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;