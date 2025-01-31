import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <h1>Karnzy Components</h1>
        </div>
        <Nav location='header' />
      </div>
    </header>
  );
};
export default Header;
