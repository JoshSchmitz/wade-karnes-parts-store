// import components
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header>
          <h3>Header</h3>
        </Header>
        <Content>
          <h3>Content</h3>
          <Outlet />
        </Content>
        <Footer>
          <h3>Footer</h3>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
