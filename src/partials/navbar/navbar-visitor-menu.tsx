import React from 'react';
import NavbarLink from './navbar-link';

const NavbarVisitorMenu: React.FC = () => (
  <>
    <NavbarLink sx={{ fontSize: 20 }} to="/auth/login">Login</NavbarLink>
    <NavbarLink sx={{ fontSize: 20 }} to="/auth/register">Register</NavbarLink>
  </>
);

export default NavbarVisitorMenu;
