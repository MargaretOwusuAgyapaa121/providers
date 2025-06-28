import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import SocialBar from './components/SocialBar';
import Home from './pages/Home';  
import About from './pages/AboutUs';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import MissionProjects from './pages/MissionProject'; 
import ApostolicMissions from './pages/ApostolicMission';
import Contact from './pages/Contact'; 
import Donate from './pages/Donate';  
import Login from './pages/Login';
import SermonAndEventPage from './pages/Sermonevent';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Nav />
      <SocialBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/missionproject" element={<MissionProjects />} />
        <Route path="/apostolicmission" element={<ApostolicMissions />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Added Contact Route */}
        <Route path="/bishop-dashboard" element={<Login />} />
        <Route path="/sermons" element={<SermonAndEventPage />} /> {/* ✅ Added Sermon and Event Page */}
        
        <Route path="/donate" element={<Donate />} /> {/* ✅ Added Donate Route */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
