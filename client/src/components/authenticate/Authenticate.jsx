import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import pages
import Login from './pages/Login';
import Register from './pages/Register';

// import components
import ProfileBadge from './components/ProfileBadge';

import { handleOpen } from '../../store/slices/auth/auth';

const Authenticate = () => {
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state.nav);
  const { userInfo, isOpen } = useSelector((state) => state.auth);
  // const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);
  /* 
  const handleOpen = () => {
    setOpen(!open);
  };
 */
  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <>
      {userInfo ? (
        <Link to='profile'>
          <div className='auth'>
            <ProfileBadge />
          </div>
        </Link>
      ) : (
        <Link
          to={
            currentItem === 'Home'
              ? '/'
              : `/${currentItem.toString().toLowerCase()}`
          }
          onClick={() => dispatch(handleOpen(!isOpen))}
        >
          <div className='auth'>
            <ProfileBadge />
          </div>
        </Link>
      )}
      <div className={isOpen ? 'auth-container' : 'auth-container closed'}>
        {register ? (
          <Register
            // openClick={() => handleOpen()}
            loginClick={() => handleRegister()}
          />
        ) : (
          <Login
            // openClick={() => handleOpen()}
            registerClick={() => handleRegister()}
          />
        )}
      </div>
    </>
  );
};
export default Authenticate;
