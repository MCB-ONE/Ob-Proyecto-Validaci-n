import React from 'react';
import { Divider, Layout, Menu } from 'antd';
import { LogoutOutlined, UsergroupAddOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

/** Import Styles */
import '../../styles/css/sidebar.scss';

const { Sider } = Layout;

const AppSidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="titulo">
        <h1 className="h4 m-0">Panel de administración</h1>
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>

        <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
          <Link to="usuarios">
            Usuarios
          </Link>
        </Menu.Item>
        <Divider />
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <Link to="ajustes">
            Ajustes
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
          Salir
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
