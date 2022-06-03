import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Divider,
  Badge,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectCartItemsCount, selectLoggedIn } from '../../store/selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectLoggedIn);
  const cartItemsCount = useRootSelector(selectCartItemsCount);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
      <Container>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: 'space-between',
        }}
        >
          <Box>
            <NavbarLink sx={{ fontSize: 20 }} to="/">Home</NavbarLink>
            <NavbarLink sx={{ fontSize: 20 }} to="/shop">Shop</NavbarLink>
            <NavbarLink sx={{ fontSize: 20 }} to="/woman">Woman</NavbarLink>
            <NavbarLink sx={{ fontSize: 20 }} to="/man">Man</NavbarLink>
            <NavbarLink sx={{ fontSize: 20 }} to="/smart">Smart Watches</NavbarLink>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <NavbarLink to="/cart" sx={{ display: 'inline-flex', gap: 1 }}>
              <Badge badgeContent={cartItemsCount} color="primary">
                <ShoppingBasketIcon sx={{ fontSize: 28 }} />
              </Badge>
            </NavbarLink>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: 'primary.main', alignSelf: 'stretch', ml: 2, my: 2,
              }}
            />
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
