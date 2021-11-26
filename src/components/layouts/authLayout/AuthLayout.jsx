import React from 'react';
import {
 Layout,
} from 'antd';
import LoginPage from '../../../Pages/LoginPage';

const AuthLayout = () => {
    return (
      <Layout className="login-page row">
        <LoginPage />
      </Layout>
    );
};

export default AuthLayout;
