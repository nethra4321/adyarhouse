import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './components/ContactForm';
import Navbar from './components/Navbar';
import Faq from './components/faq';
import Rooms from './components/Rooms'; 
import Terms from './components/terms'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}
export default App;
