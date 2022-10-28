import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/1756006/pexels-photo-1756006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />

        <div className='user'>
          <img
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <div className='info'>
            <span>john</span>
            <p>posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <AiOutlineEdit className='editButton' />
            </Link>
            <AiOutlineDelete className='editButton delete' />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          optio error ab voluptas eveniet deleniti!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          consequuntur suscipit, minus magni quisquam laborum necessitatibus
          aliquid totam doloremque perspiciatis adipisci tempora ut inventore
          consequatur optio autem repudiandae cumque fugiat quod modi!
          <br />
          <br />
          Ratione sint, expedita velit id officia quibusdam earum reprehenderit
          natus dolores sapiente voluptates illum, esse rerum consequatur nulla
          amet laboriosam blanditiis eos repudiandae molestias a iusto non
          quisquam aspernatur!
          <br />
          <br />
          Quisquam veniam unde ipsa earum laborum officia molestiae accusamus.
          Aspernatur mollitia eligendi recusandae natus quasi perspiciatis quos,
          deleniti dolores minus architecto culpa dolore laborum. Alias impedit
          corporis accusantium eaque laborum quo, fugit nesciunt nam iusto
          exercitationem quae ut nemo.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
