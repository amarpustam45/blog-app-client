import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <h1>login</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type='password' placeholder='password' />
        <button>login</button>
        <p>Username or password is incorrect!</p>
        <span>
          Don't have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
