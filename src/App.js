import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Table from './components/Table/Table.js';
import Navbar from './components/Navbar/Navbar.js';
import Login from './components/Auth/Login.js';

import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}
