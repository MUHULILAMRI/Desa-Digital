import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import DigitalServices from './pages/DigitalServices';
import PopulationData from './pages/PopulationData';
import SocialAid from './pages/SocialAid';
import VillageFinance from './pages/VillageFinance';
import VillageProfile from './pages/VillageProfile';
import AdminLogin from './pages/AdminLogin';
import AttendanceSystem from './pages/AttendanceSystem';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-services" element={<DigitalServices />} />
          <Route path="/population-data" element={<PopulationData />} />
          <Route path="/social-aid" element={<SocialAid />} />
          <Route path="/village-finance" element={<VillageFinance />} />
          <Route path="/village-profile" element={<VillageProfile />} />
          <Route path="/attendance" element={<AttendanceSystem />} />
          <Route path="/admin-login" element={<AdminLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;