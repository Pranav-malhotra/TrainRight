import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const Exercises = ({ exercise, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: '90px' } }} mt="40px" p="30px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '40px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '50px', xs: '50px' },ml:{ lg: '100px', xs: '50px' },pl:{lg:'250px',xs:'150px'} }} flexWrap="nowrap" justifyContent="center">
      {currentExercises.map((exercise, idx) => (
        <ExerciseCard key={idx} exercise={exercise} />
      ))}
    </Stack>
    <Stack sx={{ mt: { lg: '90px', xs: '50px' } }} alignItems="center">
      {exercise.length > 9 && (
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercise.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Stack>
  </Box>
  );
};

export default Exercises;
