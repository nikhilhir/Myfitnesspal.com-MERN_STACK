import { Box, Button, Center, Container } from '@chakra-ui/react';
import React from 'react'

const Weightgoal = ({ setIndex, index }) => {
  return (
    // <Center minH="50vh">

    <Container
      display="flex"
      flexDirection="column"
      paddingTop={5}
      paddingBottom={5}
      gap={5}
    >
      <Button variant="outline" onClick={()=>setIndex(index+1)}>Lose Weight</Button>
      <Button variant="outline" onClick={()=>setIndex(index+1)}>Maintain Weight</Button>
      <Button variant="outline" onClick={()=>setIndex(index+1)}>Gain Weight</Button>
    </Container>
    // </Center>
  );
};

export default Weightgoal
