import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import React from 'react';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Search from './components/Search';
import Searched from './pages/Searched';


function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <Category />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:searched" element={<Searched />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
