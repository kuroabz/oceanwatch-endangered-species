import React from 'react';
import { useState } from "react"
import Map from './components/Map.jsx'; //new map component
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import DataReport from './components/DataReport.jsx';
import ReportIncident from './components/ReportIncident.jsx';
import ViewReport from './components/ViewReport.jsx';
import Photo from './components/Photo.jsx';
import BlogSection from './components/BlogSection.jsx';
import EndangeredSpecies from './components/EndangeredSpecies.jsx';


function App() {
  
  const [incidents, setIncidents] = useState([]);

  const addIncident = (newIncident) => {
    setIncidents(prev => [...prev, { id: Date.now(), ...newIncident }]);
  };

  return (

    <BrowserRouter>     
      <div style ={{ backgroundColor: '#111f34', minHeight: '100vh' }}>
        <header style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ color: '#9af3ffff', fontSize: '3em', margin: 0 }}>
            Ocean Watch
            </h1>
            </header>

            <Navbar />
            
            <div className="App">
              <Routes>
                <Route path="/" element={<EndangeredSpecies />} />
                <Route path="/DataReport" element={<DataReport incidents={incidents} />} />
            
                <Route path="/report-incident" element={<ReportIncident addIncident={addIncident} />} />
                <Route path="/view-report" element={<ViewReport incidents={incidents} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/Map" element={<Map />} />
                <Route path="/Photo" element={<Photo />} />
                <Route path="/BlogSection" element={<BlogSection />} />
                <Route path="/EndangeredSpecies" element={<EndangeredSpecies />} />

              </Routes>
            </div>
      </div>
    </BrowserRouter>         
 );
}

export default App;
