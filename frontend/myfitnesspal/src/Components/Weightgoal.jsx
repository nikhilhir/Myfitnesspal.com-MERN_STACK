import { Box, Button, Center, Container } from '@chakra-ui/react';
import React from 'react'

const Weightgoal = () => {
  return (
    <Center minH="50vh">
      <Box
        as="div"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <Container display="flex" flexDirection="column" paddingTop={5} paddingBottom={5} gap={5}>
          <Button variant="outline">Lose Weight</Button>
          <Button variant="outline">Maintain Weight</Button>
          <Button variant="outline">Gain Weight</Button>
        </Container>
      </Box>
    </Center>
  );
}

export default Weightgoal
