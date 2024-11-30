import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
    const [bodyPart, setbodyPart] = useState('all');
    const [exercise, setExercises] = useState([]);

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
        </Box>
    )
}

export default Home