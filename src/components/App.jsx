import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import SettingsPage from '../Pages/SettingsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import UsersPage from '../Pages/UsersPage';
import AppHeader from './layout/AppHeader';
/* import AppLayout from './layout/AppLayout'; */
import AppSidebar from './layout/AppSidebar';

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
      <Layout>
        <AppSidebar />
        <Layout>
          <AppHeader />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/ajustes" element={<SettingsPage />} />
            <Route path="*" element={NotFoundPage} />
          </Routes>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
