import React, { useState, useRef } from 'react';
import {
  Avatar,
  Popper,
  Box,
  Paper,
  MenuList,
  MenuItem,
  Divider,
  Typography,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
import { selectAuthUser, selectCartItemsCount } from '../../store/selectors';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import NavbarLink from './navbar-link';

const NavbarAuthMenu: React.FC = () => {
  const navigate = useNavigate();
  const user = useRootSelector(selectAuthUser);
  const dispatch = useRootDispatch();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);
  const cartItemsCount = useRootSelector(selectCartItemsCount);

  const logout = () => {
    dispatch(authLogoutAction);
  };

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const userInitials = user && user.name && user.surname
    ? user.name[0] + user.surname[0]
    : null;

  return (
    <Box
      ref={popperAnchorRef}
      sx={(theme) => ({ display: 'inline-flex', alignItems: 'center', height: theme.mixins.navbar.height })}
    >
      <NavbarLink to="/cart" sx={{ display: 'inline-flex', gap: 1, mr: 2 }}>
        <Badge badgeContent={cartItemsCount} color="primary">
          <ShoppingCartIcon sx={{ fontSize: 28 }} />
        </Badge>
      </NavbarLink>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleMenuOpen}
      >
        <Typography sx={{ mr: 2, userSelect: 'none' }}>{user?.email}</Typography>
        {(userInitials || user?.img) && <Avatar src={user?.img}>{userInitials}</Avatar>}

      </Box>
      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper elevation={3}>
          <MenuList>
            <MenuItem onClick={() => handleNavigate('/profile')}>
              <PersonIcon sx={{ mr: 1 }} />
              <Typography>Jūsų profilis</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>
              <PowerSettingsNewIcon sx={{ mr: 1 }} />
              <Typography>Atsijungti</Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarAuthMenu;
