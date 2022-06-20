import React from 'react';
import {
  AppBar,
  Box,
  Container,
} from '@mui/material';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectAuthLoggedIn } from '../../store/selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
      <Container>
        <Box sx={(theme) => ({
          px: { xs: 0, sm: 0 },
          display: 'flex',
          justifyContent: 'space-between',
          height: theme.mixins.navbar.height,
        })}
        >
          <Box>
            <NavbarLink to="/">Pagrindinis</NavbarLink>
            <NavbarLink to="/shop">Laikrodžiai</NavbarLink>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
