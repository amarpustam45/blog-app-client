import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [cat]);

  return (
    <div className='menu'>
      <h1>other posts you may like</h1>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <img src={`/upload/${post?.img}`} alt='' />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
