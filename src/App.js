import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile.js';
import Dashboard from './components/Dashboard.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="members/ids" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
