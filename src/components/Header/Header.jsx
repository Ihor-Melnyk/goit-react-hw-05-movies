import { NavBar, NavLinkHeader } from './Header.styled';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavBar>
        <NavLinkHeader to="/">Home</NavLinkHeader>
        <NavLinkHeader to="/movies">Movies</NavLinkHeader>
      </NavBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
