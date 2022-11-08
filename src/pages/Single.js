import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import { Image } from 'cloudinary-react';

const Single = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const postID = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts/${postID}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [postID]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postID}`);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  return (
    <div className='single'>
      <div className='content'>
        <Image
          publicId={post.img}
          cloud_name='amarpustam'
          secure='true'
          alt={post.title}
          crop='fill'
          className='cloud-image'
        />

        <div className='user'>
          {post.userimg && <img src={post.userimg} alt='' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`} state={post}>
                <AiOutlineEdit className='editButton' />
              </Link>
              <AiOutlineDelete
                className='editButton delete'
                onClick={handleDelete}
              />
            </div>
          )}
        </div>

        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.category} />
    </div>
  );
};

export default Single;
