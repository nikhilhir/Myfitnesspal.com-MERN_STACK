import { Box, Center, Container, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const Welcome_signup = () => {
  return (
    <Center minH="50vh">
      <Box
        as="div"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <Container >
          <Text fontSize="4xl">
            Welcome! Just a few quick questions so we can customize MyFitnessPal
            for you.
          </Text>
        </Container>
      </Box>
    </Center>
  );
}

export default Welcome_signup
