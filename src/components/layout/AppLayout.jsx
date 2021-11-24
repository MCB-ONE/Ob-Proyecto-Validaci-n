import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const {
 Header, Content, Footer, Sider,
} = Layout;
const AppLayout = () => {
    return (
      <Layout>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
          console.log(broken);
        }}
          onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. .</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Validator ©2021 Created by Equipo 1</Footer>
        </Layout>
      </Layout>
    );
};

export default AppLayout;
