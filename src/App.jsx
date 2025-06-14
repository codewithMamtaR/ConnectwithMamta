import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Import other pages when you create them
import About from './pages/About';

import Review from './pages/Review';

import StudentList from './pages/Stulist';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Stulist" element={<StudentList />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;