import Links from './components/links';
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between sm:px-8 lg:px-16 px-40 py-4 gap-36'>
      <Logo size={'w-64'} />
      <SearchBar />
      <Links />
    </div>
  );
};

export default NavBar;
