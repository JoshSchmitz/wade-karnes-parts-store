import Nav from '../nav/Nav';

const Footer = () => {
  const copyYear = new Date(Date.now()).toLocaleDateString(undefined, {
    year: 'numeric',
  });
  return (
    <footer>
      <div className='container'>
        <div>
          Copyright &copy; {copyYear}, Joshuah Schmitz, all rights reserved.
        </div>
        <Nav location='footer' />
      </div>
    </footer>
  );
};
export default Footer;
