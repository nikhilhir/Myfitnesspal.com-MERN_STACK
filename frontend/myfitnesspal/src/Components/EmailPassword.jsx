import { Box, Button, Center, Container, FormControl, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

const EmailPassword = () => {
  return (
    <Center minH="50vh">
      <Box
        as="div"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <FormControl>
          <Box marginTop={5}>
            <FormLabel>Almost there! Create your account.</FormLabel>
            <Input marginTop={2} type="Text" placeholder="Email address" />
            <Input marginTop={2} type="Text" placeholder="Create a password" />
            <FormHelperText marginTop={1}>
              Must be at least 10 characters ,no spaces
            </FormHelperText>
          </Box>
        </FormControl>
      </Box>
    </Center>
  );
};

export default EmailPassword;
