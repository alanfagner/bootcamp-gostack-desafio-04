import React, { Component } from 'react';

import Post from '../Post';
import './style.css';

export default class ListPost extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Alan Fagner',
            avatar: 'https://avatars3.githubusercontent.com/u/5151211?s=40&v=4',
          },
          date: '04 Jun 2019',
          content:
            'Duis eu tristique elit. Morbi a egestas dui. Donec vel tincidunt quam, nec dignissim leo. Nullam bibendum eros a pulvinar tincidunt. Mauris hendrerit sapien id sagittis accumsan. Praesent sit amet eleifend risus. Fusce varius porta ex vel venenatis. Nulla fringilla aliquam consequat. Mauris urna lorem, facilisis quis vestibulum pulvinar, dignissim ut dolor. Proin congue imperdiet sollicitudin. Nullam placerat dapibus ex ac imperdiet. Etiam a eleifend lorem. Aenean ac ante risus.',
          comments: [
            {
              id: 1,
              author: {
                name: 'Alan Fagner',
                avatar:
                  'https://avatars3.githubusercontent.com/u/5151211?s=40&v=4',
              },
              content: 'Conteúdo do comentário',
            },
          ],
        },
        {
          id: 2,
          author: {
            name: 'Alan Fagner',
            avatar: 'https://avatars3.githubusercontent.com/u/5151211?s=40&v=4',
          },
          date: '04 Jun 2019',
          content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
          comments: [
            {
              id: 1,
              author: {
                name: 'Alan Fagner',
                avatar:
                  'https://avatars3.githubusercontent.com/u/5151211?s=40&v=4',
              },
              content: 'Conteúdo do comentário',
            },
            {
              id: 2,
              author: {
                name: 'Alan Fagner',
                avatar:
                  'https://avatars3.githubusercontent.com/u/5151211?s=40&v=4',
              },
              content:
                'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
          ],
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="list-content">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}
