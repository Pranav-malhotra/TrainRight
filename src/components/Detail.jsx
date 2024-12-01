import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/assets/icons/body-part.png';
import TargetImage from '../assets/assets/icons/target.png';
import EquipmentImage from '../assets/assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack 
      gap="40px" 
      sx={{ 
        flexDirection: { lg: 'row', xs: 'column' }, 
        p: '20px', 
        alignItems: 'center' 
      }}
    >
      {/* Exercise Image */}
      <img 
        src={gifUrl} 
        alt={name} 
        ml="100px"
        pl="100px"
        loading="lazy" 
        className="detail-image" 
        style={{ width: '350px', height: 'auto', borderRadius: '10px' }}
      />

      {/* Text and Details */}
      <Stack 
        sx={{ 
          gap: { lg: '30px', xs: '20px' },ml:{lg:'500px',xs:'250px'},
          alignItems: 'left', 
          maxWidth: '600px',
          textAlign:'left' 
        }}
      >
        <Typography 
          sx={{ fontSize: { lg: '30px', xs: '32px' }, fontWeight: 700 }} 
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography 
          sx={{ fontSize: { lg: '20px', xs: '16px' }, color: '#4F4C4C', lineHeight: 1.6 }}
        >
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>

        {/* Detail List */}
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="16px" alignItems="center">
            <Button
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
              }}
            >
              <img 
                src={item.icon} 
                alt={item.name} 
                style={{ width: '30px', height: '30px' }} 
              />
            </Button>
            <Typography 
              textTransform="capitalize" 
              sx={{ fontSize: { lg: '24px', xs: '18px' } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
