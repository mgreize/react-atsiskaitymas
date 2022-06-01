import React from 'react';
import {
  Typography, Button, Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        backgroundImage: 'url(/watches.jpg)',
        minHeight: '91vh',
        backgroundPosition: '35% 25%',
      }}
      >
        <Typography sx={{ fontSize: 50, mr: 15 }}>New watches on best price</Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/shop')}
          sx={{
            color: 'common.white',
            bgcolor: 'primary.main',
            width: 180,
            height: 80,
            mr: 40,
            mt: 10,
          }}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
};
export default HomePage;
