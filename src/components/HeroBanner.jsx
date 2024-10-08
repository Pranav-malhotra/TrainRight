import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg:'250px', xs:'70px'},
        ml :{sm:'100px'}
    }}position='relative' p='20px' left='100px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='34px' >
            Fitness Club
        </Typography>
        <Typography fontFamily="Arial" fontWeight={700} sx={{fontSize:{lg:'42px',xs:'38 px'}}}
        mb='15px' mt='20px'>
        Work Hard, Smile often, Keep Going!
        </Typography>
        <Typography fontSize='26px' lineHeight='35px' mb={3}>
            Checkout the most effective Exercise
        </Typography>
        <Button variant='contained' color='error' href='#exercise' sx={{backgroundColor:'#ff2625',padding:'10px'}}>
            Explore Exercises   
        </Button>
        <Typography
        fontWeight={600}
        color='#ff2625'
        fontSize="200px"
        sx={{
            opacity:0.1,
            display:{lg:'block', xs:'none'}
        }}
        >Exercise</Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner;