import React from 'react';
import { Layout } from 'antd';
/* import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../../Pages/LoginPage';
import NotFoundPage from '../../../Pages/NotFoundPage';
import SettingsPage from '../../../Pages/SettingsPage';
import UsersPage from '../../../Pages/UsersPage'; */
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const AdminPanelLayout = ({ children }) => {
    return (
      <Layout>
        <AppSidebar />
        <Layout>
          <AppHeader />
          {children}
          {/* <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/ajustes" element={<SettingsPage />} />
            <Route path="*" element={NotFoundPage} />
          </Routes> */}
        </Layout>
      </Layout>
    );
};

export default AdminPanelLayout;
