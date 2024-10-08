import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/assets/images/Logo.png';


const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none'
      }}
      px="20px"
    >
      <Stack direction="row" alignItems="center" gap="10px">
        <Link to='/'>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: '50px',
              height: '50px', // "Height" should be lowercase
            }}
          />
        </Link>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Typography fontWeight={700} sx={{ textDecoration: "none", color: "#3A1212", fontSize:{lg:'50px',xs:'46px'},fontFamily:'Bebas Neue'}}>
            TrainRight
          </Typography>
        </Link>
      </Stack>

      <Stack
        direction='row'
        gap='40px'
        fontSize='30px'
        alignItems='flex-end'
      >
        <Link to='/' style={{
          textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625"
        }}>Home</Link>
        <a href="#excercises" style={{
          textDecoration: 'none', color: '#3A1212'
        }}>Exercises</a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
