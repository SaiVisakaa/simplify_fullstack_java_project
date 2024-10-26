import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import MovieDetailPage from './Pages/MovieDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>

    </Router>
  );
};

export default App;
