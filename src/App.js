import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Search from './components/Search';
import Reels from './components/Reels';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Explore from './components/Explore';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const AuthenticatedLayout = ({ children }) => (
    <>
      {children}
      <BottomNav />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <AuthenticatedLayout>
                  <Home />
                </AuthenticatedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/search" 
            element={
              isAuthenticated ? (
                <AuthenticatedLayout>
                  <Search />
                </AuthenticatedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/reels" 
            element={
              isAuthenticated ? (
                <AuthenticatedLayout>
                  <Reels />
                </AuthenticatedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/messages" 
            element={
              isAuthenticated ? (
                <AuthenticatedLayout>
                  <Messages />
                </AuthenticatedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? (
                <AuthenticatedLayout>
                  <Profile />
                </AuthenticatedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/explore" 
            element={
              isAuthenticated ? (
                <AuthenticatedLayout>
                  <Explore />
                </AuthenticatedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 