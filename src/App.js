import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './page/Home';
import About from './page/About';
import Tour from './page/Tour';
import PrivateTour from './page/PrivateTour';
import BusanTour from './page/tourDetails/BusanTour';
import KdramaTour from './page/tourDetails/KdramaTour';
import SnsTour from './page/tourDetails/SnsTour';
import BusinessTour from './page/tourDetails/BusinessTour';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/privateTour" element={<PrivateTour />} />
      
      {/* Tour Detail 컴포넌트 */}
      <Route path="/BusanTour" element={<BusanTour />} />
      <Route path="/KdramaTour" element={<KdramaTour />} />
      <Route path="/SnsTour" element={<SnsTour />} />
      <Route path="/BusinessTour" element={<BusinessTour />} />

    </Routes>
  );
}

export default App;
