import React from 'react';
import PropTypes from 'prop-types';

const Error = props => {
  if (props.message) {
    return (
      <div className='error'>
        {props.message}
      </div>
    );
  } else {
    return null;
  }
};

export default Error;