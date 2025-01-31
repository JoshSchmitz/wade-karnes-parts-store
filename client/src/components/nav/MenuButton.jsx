import PropTypes from 'prop-types';
import { MdMenu, MdOutlineLink } from 'react-icons/md';

const MenuButton = ({ type }) => {
  return (
    <>
      <div className='menu-btn'>
        <div className='menu-btn-badge'>
          <div className='menu-btn-badge-text'>
            {type === 'menu' ? (
              <MdMenu className='icon' />
            ) : (
              <MdOutlineLink className='icon' />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
MenuButton.propTypes = {
  type: PropTypes.string.isRequired,
};
export default MenuButton;
