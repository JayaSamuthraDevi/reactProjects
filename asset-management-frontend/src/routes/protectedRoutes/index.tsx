import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setAuthenticated] = useState(true);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
