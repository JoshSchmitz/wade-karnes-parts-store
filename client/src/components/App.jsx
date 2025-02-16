import { useState } from 'react';

// import components
import Authenticate from './Authenticate';
import { Outlet, useNavigate } from 'react-router-dom';
import { ConfigProvider, Layout, Flex, Menu, Space } from 'antd';

// import icons
// import { UserOutlined, LoginOutlined } from '@ant-design/icons';

// import navigation items
import { items } from '../assets/config/navigation';

// theme
import { theme } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  // config
  const navigate = useNavigate();

  // theme
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState('home');
  const menuClick = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
    // theme={{
    //   token: {
    //     colorPrimary: '#fff',
    //   },
    // }}
    >
      <div className='App'>
        <Layout>
          <Header
            style={{
              height: 'auto',
              background: colorBgContainer,
            }}
          >
            <Flex justify='space-between' align='center'>
              <h3>Karnzy Components</h3>
              <Space size={'small'}>
                <Menu
                  onClick={menuClick}
                  selectedKeys={[current]}
                  mode='horizontal'
                  items={items}
                  // theme='dark'
                />
                <Authenticate />
              </Space>
            </Flex>
          </Header>
          <Content
            style={{
              marginTop: '24px',
              padding: '0 50px',
            }}
          >
            <Outlet />
          </Content>
          <Footer>
            <h3>Footer</h3>
          </Footer>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

export default App;
