import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';

const AdminPanelLayout = () => {
    return (
      <Layout>
        <AppSidebar />
        <Layout>
          <AppHeader />
          <Outlet />
        </Layout>
      </Layout>
    );
};

export default AdminPanelLayout;
