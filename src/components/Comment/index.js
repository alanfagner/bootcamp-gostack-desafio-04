import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import './style.css';

function Comment({ data }) {
  return (
    <div className="comment">
      <Image url={data.author.avatar} alt="avatar" />
      <p className="comment-content">
        <strong>{`${data.author.name} `}</strong>
        {data.content}
      </p>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    content: PropTypes.string,
  }).isRequired,
};

export default Comment;
