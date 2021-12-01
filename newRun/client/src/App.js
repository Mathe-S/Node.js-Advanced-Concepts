import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from './components/index'
import { ROUTES } from './constants/Routes'
import { Login, Dashboard } from './routes'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={
            <RequireAuth reversed>
              <Login />
            </RequireAuth>}
          />
          <Route path={ROUTES.DSHBOARD} element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>} />
          <Route path="/404" element={<div>Choose the correct path </div>} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
