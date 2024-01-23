// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SignupPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        </Routes>
    </Router>
  );
};

export default App;
