import React from 'react';
import { useAuth } from '../context/AuthContext';
import Login from './Login';
import AppContent from './AppContent';

const AuthenticatedApp = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppContent /> : <Login />;
};

export default AuthenticatedApp;