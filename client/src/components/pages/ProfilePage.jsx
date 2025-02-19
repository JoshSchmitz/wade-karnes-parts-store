import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import compunents
import {
  Col,
  Row,
  Card,
  Space,
  Flex,
  Typography,
  Form,
  Input,
  Button,
  Tooltip,
  message,
} from 'antd';
const { Title, Paragraph } = Typography;

// import icons
import {
  LogoutOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from '@ant-design/icons';

// import state
import { setCredentials, clearCredentials } from '../../store/slices/auth/auth';
import {
  useUpdateUserMutation,
  useLogoutMutation,
} from '../../store/slices/auth/api-auth';

const ProfilePage = () => {
  // config
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  // state
  const { userInfo } = useSelector((state) => state.auth);
  const [updateUser, { updateLoading }] = useUpdateUserMutation();
  const [logout] = useLogoutMutation();

  // form handlers
  const profileFinish = async (values) => {
    const { email, password, admin } = values;
    try {
      const res = await updateUser({ email, password, admin }).unwrap();
      dispatch(setCredentials({ ...res }));
      messageApi.open({
        type: 'success',
        content: 'Upudate successful!',
      });
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error?.data?.message || error.error,
      });
    }
  };
  const profileFinishFailed = (/* errorInfo */) => {
    messageApi.open({
      type: 'error',
      content: 'There was an error while trying to sign in.',
    });
  };
  const logoutFinish = async () => {
    try {
      navigate('/');
      await logout().unwrap();
      dispatch(clearCredentials());
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error?.data?.message || error.error,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <Space
              direction='vertical'
              size='large'
              style={{ textAlign: 'center', width: '100%' }}
            >
              <Flex justify='space-between' align='center'>
                <Title level={4} style={{ margin: 0 }}>
                  {userInfo.name}
                </Title>
                <Tooltip title='Log Out'>
                  <Button
                    shape='circle'
                    color='default'
                    variant='filled'
                    size='large'
                    icon={<LogoutOutlined />}
                    onClick={logoutFinish}
                  />
                </Tooltip>
              </Flex>
              <Paragraph style={{ margin: 'auto' }}>
                Update your profile information
              </Paragraph>
              <Form
                name='updateProfile'
                colon={false}
                style={{
                  textAlign: 'right',
                }}
                onFinish={profileFinish}
                onFinishFailed={profileFinishFailed}
                autoComplete='off'
                initialValues={{
                  name: userInfo.name,
                  email: userInfo.email,
                }}
              >
                <Form.Item
                  name='name'
                  rules={[
                    { required: true, message: 'Please input you name!' },
                  ]}
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
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder='Password'
                  />
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
                          new Error(
                            'The new password that you entered do not match!'
                          )
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
                  <Button
                    type='primary'
                    htmlType='submit'
                    loading={updateLoading}
                  >
                    Update Profile
                  </Button>
                </Form.Item>
              </Form>
              {/* <Text style={{ maxWidth: 300 }}>
              Don&apos;t have an account?{' '}
              <Link onClick={toggleLogin}>Sign up</Link>
            </Text> */}
            </Space>
          </Card>
        </Col>
        <Col span={16}>
          <Flex vertical='vertical' gap='middle'>
            {userInfo.admin && (
              <Card bordered={false}>
                <h1>Admin Stuff</h1>
              </Card>
            )}
            <Card bordered={false}>
              <h1>Account Stuff</h1>
            </Card>
          </Flex>
        </Col>
      </Row>
    </>
  );
};
export default ProfilePage;
