import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { API_URL } from '../util/API';

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_URL}/posts/?cat=${cat}`);
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
          <Image
            publicId={post?.img}
            cloud_name='amarpustam'
            secure='true'
            alt={post.title}
            crop='fill'
            className='cloud-image'
          />
          <h2>{post.title}</h2>
          <Link className='link' to={`/post/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
