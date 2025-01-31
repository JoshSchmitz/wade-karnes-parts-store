import { useSelector } from 'react-redux';

//import components
import ProfileForm from '../components/authenticate/pages/Profile';

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <main>
        {userInfo ? (
          <div className='container profile'>
            <div className='edit'>
              <ProfileForm />
            </div>
            <article className='section' id='resumes'>
              <h1>This is where the edit components goes.</h1>
            </article>
          </div>
        ) : (
          <div className='container'>
            <div className='error'>
              <h1>You are not authorized to view this page!</h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default ProfilePage;
