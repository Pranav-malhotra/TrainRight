import React,{useContext} from 'react';
import { Box, Typography} from '@mui/material';
import {ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard'

import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item,index) => (
        <Box
          key={item.id || index}
          itemId={item.id || index}
          title={item.id || index}
          m="0 40px"
        >
         {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>  :<ExerciseCard exrcise={item} />}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
