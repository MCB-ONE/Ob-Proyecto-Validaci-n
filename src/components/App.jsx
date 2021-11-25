import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import AuthLayout from './layouts/authLayout/AuthLayout';
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  /** Prueba de render condicional */
const { user: currentUser } = useSelector((state) => state.auth);
console.log(currentUser);

  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <AuthLayout>
            <Route path="/login" component={LoginPage} />
          </AuthLayout>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
