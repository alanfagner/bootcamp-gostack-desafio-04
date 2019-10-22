import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Image({ url, alt }) {
  return <img className="image-around" src={url} alt={alt} />;
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
