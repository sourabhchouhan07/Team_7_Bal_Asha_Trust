import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import DemoPage from './Pages/DemoPage';
import CaseManagerDashboard from './Pages/CaseManagerDashboard';
function App() {
  return (
    <>
    <Navbar />

    {/* // All routes will go here */}

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/case-manager" element={<CaseManagerDashboard />} />
      
    </Routes>
    </>
  );
}

export default App;
