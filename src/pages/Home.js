import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque doloribus dolor accusantium natus quae possimus sapiente deleniti voluptas fugiat.',
      img: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque doloribus dolor accusantium natus quae possimus sapiente deleniti voluptas fugiat.',
      img: 'https://images.pexels.com/photos/806609/pexels-photo-806609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque doloribus dolor accusantium natus quae possimus sapiente deleniti voluptas fugiat.',
      img: 'https://images.pexels.com/photos/374557/pexels-photo-374557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque doloribus dolor accusantium natus quae possimus sapiente deleniti voluptas fugiat.',
      img: 'https://images.pexels.com/photos/7984875/pexels-photo-7984875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque doloribus dolor accusantium natus quae possimus sapiente deleniti voluptas fugiat.',
      img: 'https://images.pexels.com/photos/1756006/pexels-photo-1756006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt={post.title} />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
