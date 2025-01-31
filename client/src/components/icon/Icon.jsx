import React from 'react';
import PropTypes from 'prop-types';

// import icons
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

const Icon = ({ icon, className, onClick }) => {
  const DisplayIcon = (iconName) => {
    if (iconName.startsWith('Md')) {
      return MdIcons[iconName];
    }
    if (iconName.startsWith('Bs')) {
      return BsIcons[iconName];
    }
    if (iconName.startsWith('Di')) {
      return DiIcons[iconName];
    }
    if (iconName.startsWith('Fa')) {
      return FaIcons[iconName];
    }
    if (iconName.startsWith('Io')) {
      return IoIcons[iconName];
    }
    if (iconName.startsWith('Ai')) {
      return AiIcons[iconName];
    }
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName];
    }
  };

  return (
    <div className={className ? className : 'icon'} onClick={onClick}>
      {React.createElement(DisplayIcon(icon))}
    </div>
  );
};
Icon.propTypes = {
  icon: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
