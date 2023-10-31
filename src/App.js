import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './page/Home';
import About from './page/About';
import Tour from './page/Tour';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
    </Routes>
  );
}

export default App;
