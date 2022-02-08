import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => {
  return <p>{props.message}</p>;
};

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
