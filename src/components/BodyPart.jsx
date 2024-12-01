import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => { if (setBodyPart) {
        setBodyPart(item); // Check that setBodyPart is a valid function before calling it.
      } else {
        console.error("setBodyPart is not defined!");
      }
        window.scrollTo({top: 1800, left:100, behavior:'smooth'});
      }}
      sx={{
        border: bodyPart === item ? '4px solid #FF2625' : '',
        backgroundColor: '#fff',
        borderRadius: '20px',
        width: '285px',
        height: '250px',
        cursor: 'pointer',
        gap: '10px'
      }}
    >
      <img src={Icon} alt="gym icon" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
