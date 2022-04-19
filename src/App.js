import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import React from 'react';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';


function App() {
  return (
    <div className="App">
      <Router>
        <Category />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cuisine" element={<Cuisine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
