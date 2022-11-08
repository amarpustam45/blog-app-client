import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <Image
                publicId={post.img}
                cloud_name='amarpustam'
                secure='true'
                alt={post.title}
                crop='fill'
                className='cloud-image'
              />
            </div>
            <div className='content'>
              <h1>{post.title}</h1>
              {getText(post.desc)}
              <Link className='link' to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
