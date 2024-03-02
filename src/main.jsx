
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/Login';
import Register from './pages/Register';
import App from './App.jsx';
import './index.css';
import store from './redux/store'; // Import your Redux store

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/budget" element={<App />} /> 
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);
