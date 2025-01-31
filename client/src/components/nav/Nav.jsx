import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import components
import Authenticate from '../authenticate/Authenticate';
import MenuButton from './MenuButton';

// import redux state
import { newCurrentItem } from '../../store/slices/nav';
import { handleOpen } from '../../store/slices/auth/auth';

const Nav = ({ location }) => {
  const dispatch = useDispatch();
  const { navItems, currentItem } = useSelector((state) => state.nav);
  const { userInfo, isOpen } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const handleNavOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className='nav'>
      {location === 'header' && (
        <div className='nav-list-item-noeffect menu'>
          <Link
            to={
              currentItem === 'Home'
                ? '/'
                : `/${currentItem.toString().toLowerCase()}`
            }
            onClick={handleNavOpen}
          >
            <MenuButton type='menu' />
          </Link>
        </div>
      )}
      <ul className={open ? 'nav-list' : 'nav-list closed'}>
        {navItems.map((item) => {
          const name = item.name;
          return (
            <li
              key={item._id}
              className={
                currentItem === name ? 'nav-list-item current' : 'nav-list-item'
              }
            >
              <Link
                to={name === 'Home' ? '/' : `/${name.toString().toLowerCase()}`}
                onClick={() => {
                  dispatch(newCurrentItem(name));
                  open && handleNavOpen();
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
        {location === 'footer' && (
          <li className='nav-list-item'>
            <Link
              to={
                currentItem === 'Home'
                  ? '/'
                  : `/${currentItem.toString().toLowerCase()}`
              }
              onClick={() => dispatch(handleOpen(!isOpen))}
            >
              {userInfo ? 'Profile' : 'Sign In'}
            </Link>
          </li>
        )}
      </ul>
      {location === 'header' && (
        <div className='nav-list-item-noeffect'>
          <Authenticate />
        </div>
      )}
    </nav>
  );
};
Nav.propTypes = {
  location: PropTypes.string,
};
export default Nav;
