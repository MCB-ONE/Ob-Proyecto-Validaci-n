import React from 'react';
import {
 Layout,
} from 'antd';

const AuthLayout = ({ children }) => {
    return (
      <Layout className="login-page row">
        {children}
      </Layout>
    );
};

export default AuthLayout;
