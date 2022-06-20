import React from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Img from '../../components/img';

type CategoryCardProps = {
  imgSrc?: string,
  title: string,
  id: string,
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  imgSrc,
  title,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: 300,
        width: 300,
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
      }}
      onClick={() => navigate(`/shop?categoryId=${id}`)}
    >
      <Img
        src={imgSrc ?? 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordable-watches-1575670104.jpg?crop=1.00xw:0.752xh;0,0.00962xh&resize=1200:*'}
        sx={(theme) => ({
          height: 1 / 1,
          width: 1 / 1,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          transform: 'scale(1)',
          boxShadow: theme.shadows[4],
          transition: theme.transitions.create(['box-shadow', 'transform', 'filter']),
          filter: 'brightness(0.5)',
          ':hover': {
            boxShadow: theme.shadows[12],
            transform: 'scale(1.1)',
            filter: 'brightness(1)',
            cursor: 'pointer',
            zIndex: 2,
          },
        })}
      />
      <Typography variant="h3" color="primary" sx={{ position: 'relative', zIndex: 1 }}>{title}</Typography>
    </Box>
  );
};

export default CategoryCard;
