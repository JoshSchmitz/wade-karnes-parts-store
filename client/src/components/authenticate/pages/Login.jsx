/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useLoginMutation } from '../../../store/slices/auth/api-auth';
import { setCredentials, handleOpen } from '../../../store/slices/auth/auth';

const Login = ({ registerClick }) => {
  const { isOpen } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      dispatch(handleOpen(!isOpen));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <div className='title-bar'>
          <h1 className='title'>Sign In</h1>
        </div>
        <h4 className='subtitle'>
          Sign in to your account using your email address
        </h4>
        <div className='form-group'>
          <input
            id='email'
            className='input'
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id='password'
            className='input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='button' type='submit'>
          Sign In
        </button>
      </form>
      <div className='form-section'>
        Need an account?{' '}
        <a className='link' onClick={registerClick}>
          Register
        </a>
      </div>
    </>
  );
};
Login.propTypes = {
  registerClick: PropTypes.func,
};

export default Login;
