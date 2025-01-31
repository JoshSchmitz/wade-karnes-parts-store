import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// import state
import {
  useLogoutMutation,
  useUpdateUserMutation,
} from '../../../store/slices/auth/api-auth';
import {
  clearCredentials,
  setCredentials,
} from '../../../store/slices/auth/auth';

//import components
import Icon from '../../icon/Icon';
import PulseLoader from 'react-spinners/PulseLoader';

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const profileHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateUser({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Profile updated');
        setPassword('');
        setConfirmPassword('');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <form className='form' onSubmit={profileHandler}>
        <div className='title-bar'>
          <h1 className='title'>{userInfo.name}</h1>
          <div className='logout'>
            <Icon icon='MdOutlineLogout' onClick={logoutHandler} />
          </div>
        </div>
        <h4 className='subtitle'>Update your profile information</h4>
        <div className='form-group'>
          <input
            id='name'
            className='input'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            id='confirmpassword'
            className='input'
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className='button' type='submit'>
          {isLoading ? (
            <PulseLoader
              className='loader-button'
              loading={isLoading}
              size={10}
              color='#f4f4f4'
            />
          ) : (
            'Update'
          )}
        </button>
      </form>
    </>
  );
};
export default Profile;
