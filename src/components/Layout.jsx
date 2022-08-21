import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <Link to="/">Home</Link>
      <Link to="/Movies">Movies</Link> */}
      <Outlet />
    </>
  );
};
