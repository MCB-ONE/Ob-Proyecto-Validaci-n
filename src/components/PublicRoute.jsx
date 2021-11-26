import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  /** Extract auth info */
  const userAuth = useSelector((state) => state.auth);
  const { isLogged } = userAuth;
  console.log(userAuth, isLogged);

  return isLogged ? <Navigate to="/admin" /> : children;
};

export default PublicRoute;
