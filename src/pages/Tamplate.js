import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const { token: { colorBgContainer }, } = theme.useToken();
  const naviget = useNavigate()

  const menuItems = [
    {
      key: "/",
      icon: React.createElement(UserOutlined),
      label: `PageProperty`
    },
    {
      key: "/Item",
      icon: React.createElement(VideoCameraOutlined),
      label: `Item`
    },
    {
      key: "/3",
      icon: React.createElement(UploadOutlined),
      label: `3`
    },
    {
      key: "/4",
      icon: React.createElement(UserOutlined),
      label: `4`
    }
  ]
  const menueOnSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => naviget(key)
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" onBreakpoint={(broken) => { console.log(broken); }} onCollapse={(collapsed, type) => { console.log(collapsed, type); }} >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuItems} onSelect={menueOnSelect} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, }} />
        <Content style={{ margin: '24px 16px 0', }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', }}>
          ERP ©2023 Created by CRA
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;