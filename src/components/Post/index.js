import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';
import Image from '../Image';
import './style.css';

function Post({ data }) {
  return (
    <div className="post-card">
      <div className="header-card">
        <Image url={data.author.avatar} alt="avatar" />
        <div className="details-card">
          <p>{data.author.name}</p>
          <p className="date-card">{data.date}</p>
        </div>
      </div>
      <p className="post-content">{data.content}</p>
      <div className="divisor-card" />
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
        }).isRequired,
        content: PropTypes.string,
      })
    ),
    date: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
