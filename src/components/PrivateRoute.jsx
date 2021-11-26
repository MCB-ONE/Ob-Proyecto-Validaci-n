import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  /** Extract auth info */
  const userAuth = useSelector((state) => state.auth);
  const { isLogged } = userAuth;
  console.log(userAuth, isLogged);

  return isLogged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
