import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Center,
  Container,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Center style={{ minHeight: "50vh" }}>
      <Container>
        <FormControl>
          <FormLabel textAlign="center" paddingTop={10} paddingBottom={10}>
            Header
          </FormLabel>
           {/* body */}
           <Input type="email" />

           <Box  textAlign="center" paddingTop={10} paddingBottom={10}>
            <Button margin={5}>Prev</Button>
            <Button margin={5}>Next</Button>
          </Box>
        </FormControl>
      </Container>
    </Center>
  );
}

export default Signup
