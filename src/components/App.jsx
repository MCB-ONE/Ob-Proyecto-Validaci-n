import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import UsersPage from '../Pages/UsersPage';
import AppHeader from './layout/AppHeader';
/* import AppLayout from './layout/AppLayout'; */
import AppSidebar from './layout/AppSidebar';

/** Prueba de render condicional */
const { user: currentUser } = useSelector((state) => state.auth);

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  return (
    <div className="app">
      {
        currentUser === false ? (
          <Layout>
            <Routes>
              <Route path="/" exact element={<LoginPage />} />
            </Routes>
          </Layout>
        ) : (
          <Layout>
            <AppSidebar />
            <Layout>
              <AppHeader />
              <Routes>
                <Route path="/usuarios" exact element={<UsersPage />} />
              </Routes>
            </Layout>
          </Layout>
        )
      }

    </div>
  );
};

export default App;
