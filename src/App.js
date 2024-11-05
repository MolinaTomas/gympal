import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatedBackground } from 'animated-backgrounds';
import MainPage from './MainPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground animationName="auroraBorealis" />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
