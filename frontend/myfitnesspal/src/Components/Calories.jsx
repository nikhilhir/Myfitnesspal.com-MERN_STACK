import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const Calories = ({ formdata, setFormdata, handleChange }) => {
  return (
    <Center display="flex" flexDir="column">
      <Box textAlign="center">
        <Text fontSize="md">Your daily net calorie goal is:</Text>
        <Text fontSize="6xl">4,090</Text>
        <Text fontSize="xs">calories</Text>
      </Box>
      <Box textAlign="center" marginTop="10%">
        <Text fontSize="md">with this plan ,you should:</Text>
        <Text fontSize="2xl">Maintain your current weight</Text>
      </Box>
    </Center>
  );
};

export default Calories
