import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPost({ match }) {
  const [post, setPost] = useState(null);
  const postId = match.params.id;

  useEffect(() => {
    axios.get(`/api/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogPost;
