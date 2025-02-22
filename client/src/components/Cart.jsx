import { useState } from 'react';

// import components
import { Tooltip, Button, Drawer } from 'antd';

// import icons
import { ShoppingCartOutlined } from '@ant-design/icons';

// const cartClick = () => {};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Cart'>
        <Button
          shape='circle'
          color='default'
          variant='filled'
          size='large'
          icon={<ShoppingCartOutlined />}
          onClick={showDrawer}
        />
      </Tooltip>
      <Drawer
        title='Cart'
        placement='right'
        closable={true}
        onClose={closeDrawer}
        open={open}
        getContainer={false}
      >
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
        <h4>Cart Item</h4>
      </Drawer>
    </>
  );
};
export default Cart;
