import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPost } from './posts';

function Post() {
  const { id } = useParams();
  const post = getPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export default Post;
