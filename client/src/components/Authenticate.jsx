import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import components
import {
  Popover,
  Typography,
  Form,
  Input,
  Button,
  Flex,
  Space,
  Tooltip,
  message,
} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

// import icons
import {
  UserOutlined,
  LoginOutlined,
  MailOutlined,
  LockOutlined,
} from '@ant-design/icons';

// import state
import { setCredentials } from '../store/slices/auth/auth';
import {
  useLoginMutation,
  useRegisterMutation,
} from '../store/slices/auth/api-auth';

const Authenticate = () => {
  // config
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  // state
  const [loginPage, setLoginPage] = useState(true);
  const [open, setOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [login, { loginLoading }] = useLoginMutation();
  const [register, { registerLoading }] = useRegisterMutation();

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const toggleLogin = () => {
    setLoginPage(!loginPage);
  };

  // form handlers
  const loginFinish = async (values) => {
    const { email, password } = values;
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      setOpen(false);
      messageApi.open({
        type: 'success',
        content: 'Sign in successful!',
      });
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error?.data?.message || error.error,
      });
    }
  };
  const loginFinishFailed = (/* errorInfo */) => {
    messageApi.open({
      type: 'error',
      content: 'There was an error while trying to sign in.',
    });
  };
  const registerFinish = async (values) => {
    const { name, email, password } = values;
    try {
      const res = await register({
        name,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      setOpen(false);
      messageApi.open({
        type: 'success',
        content: `Sign up successful!`,
      });
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error?.data?.message || error.error,
      });
    }
  };
  const registerFinishFailed = (/* errorInfo */) => {
    messageApi.open({
      type: 'error',
      content: 'There was an error while tryng to sign up.',
    });
  };

  const loginForm = (
    <Space
      direction='vertical'
      size='large'
      style={{ textAlign: 'center', width: 300 }}
    >
      <Flex justify='space-between' align='center'>
        <Title level={4} style={{ margin: 0 }}>
          Sign In
        </Title>
      </Flex>
      <Paragraph style={{ margin: 'auto' }}>
        Sign in to your account using your email address.
      </Paragraph>
      <Form
        name='login'
        colon={false}
        style={{
          textAlign: 'right',
        }}
        onFinish={loginFinish}
        onFinishFailed={loginFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          name='email'
          hasFeedback
          rules={[
            {
              type: 'email',
              message: 'The input is not valid email!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder='Email' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder='Password' />
        </Form.Item>
        <Form.Item label={null} style={{ marginBottom: 0 }}>
          <Button type='primary' htmlType='submit' loading={loginLoading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Text style={{ maxWidth: 300 }}>
        Don&apos;t have an account? <Link onClick={toggleLogin}>Sign up</Link>
      </Text>
    </Space>
  );

  const registerForm = (
    <Space
      direction='vertical'
      size='large'
      style={{ textAlign: 'center', width: 300 }}
    >
      <Flex justify='space-between' align='center'>
        <Title level={4} style={{ margin: 0 }}>
          Sign Up
        </Title>
      </Flex>
      <Paragraph style={{ margin: 'auto' }}>
        Sign up with your email address.
      </Paragraph>
      <Form
        name='register'
        colon={false}
        style={{
          textAlign: 'right',
        }}
        onFinish={registerFinish}
        onFinishFailed={registerFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Please input you name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder='Name' />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder='Email' />
        </Form.Item>
        <Form.Item
          name='password'
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder='Password' />
        </Form.Item>
        <Form.Item
          name='confirmpassword'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder='Confirm Password'
          />
        </Form.Item>
        <Form.Item label={null} style={{ marginBottom: 0 }}>
          <Button type='primary' htmlType='submit' loading={registerLoading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <Text style={{ maxWidth: 300 }}>
        Already have an account? <Link onClick={toggleLogin}>Sign in</Link>
      </Text>
    </Space>
  );

  const authClick = () => {
    userInfo && navigate('profile');
  };

  return (
    <>
      {contextHolder}
      <Popover
        content={loginPage ? loginForm : registerForm}
        trigger={!userInfo && 'click'}
        placement='bottomRight'
        open={open}
        onOpenChange={handleOpenChange}
        style={{ width: 300 }}
      >
        <Tooltip title={userInfo ? 'Profile' : 'Log In'}>
          <Button
            shape='circle'
            color='default'
            // ghost
            variant='filled'
            size='large'
            icon={userInfo ? <UserOutlined /> : <LoginOutlined />}
            onClick={userInfo && authClick}
          />
        </Tooltip>
      </Popover>
    </>
  );
};
export default Authenticate;
