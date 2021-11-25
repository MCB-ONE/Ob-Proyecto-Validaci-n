import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../styles/css/header.scss';

const {
  Header,
} = Layout;
const AppHeader = () => {
  return (
    <Header className="site-layout-sub-header-background">
      <div className="profile">
        <div className="name me-2">
          <h5 className="m-0">Toni Salvadó</h5>
          <p className="mb-0 role">Administrador</p>
        </div>
        <Avatar shape="square" size={44} icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default AppHeader;
