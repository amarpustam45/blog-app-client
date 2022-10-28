import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>register</h1>
      <form>
        <input required type='email' placeholder='email' />
        <input required type='text' placeholder='username' />
        <input required type='password' placeholder='password' />
        <button>register</button>
        <p>Username or password is incorrect!</p>
        <span>
          Already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
