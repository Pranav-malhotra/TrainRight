import React from 'react';
import {Box, Stack , Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg:'212px', xs:'70px'},
        ml :{sm:'50px'}
    }}position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontFamily="Arial" fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}>
        Work Hard, Smile often, Keep Going!
        </Typography>
        <Typography fontSize='26px' lineHeight='35px' mb={3}>
            Checkout the most effective Exercise
        </Typography>
        <Button variant='contained' color='error' href='#exercise'>
            Explore Exercises
        </Button>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner;