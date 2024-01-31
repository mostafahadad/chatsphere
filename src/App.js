import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { useKeycloak } from '@react-keycloak/web';

function App(){
  const { keycloak } = useKeycloak();

  return(
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login"
          element={keycloak.authenticated ? <Navigate replace to="/" /> : <LoginPage />}
        />
        <Route 
          path="/"
          element={keycloak.authenticated ? <HomePage/> : <Navigate to="login" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;