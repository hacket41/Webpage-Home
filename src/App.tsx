import React from 'react';
import HomePage from  "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}
export default App;
