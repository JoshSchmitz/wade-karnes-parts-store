import { useNavigate } from 'react-router-dom';

// import components
import { Empty, Button, Typography } from 'antd';

const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Empty
      description={<Typography.Text>Oops! 404 Page not found.</Typography.Text>}
    >
      <Button type='primary' onClick={onClick}>
        Go Home
      </Button>
    </Empty>
  );
};
export default NotFound;
