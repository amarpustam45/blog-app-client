import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from '../img/logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='This is the logo' />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=art'>
            <h6>art</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>science</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>technology</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>cinema</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>design</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>food</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>logout</span>
          ) : (
            <Link className='link' to={'/login'}>
              Login
            </Link>
          )}
          <Link className='link' to='/write'>
            <span className='write'>Write</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
