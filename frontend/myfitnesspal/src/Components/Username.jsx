import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Username = () => {
  return (
    <Center minH="50vh">
      <Box
        as="div"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <FormControl>
          <Box marginTop={5}>
            <Input marginTop={2} type="Text" placeholder="Create a username" />
          </Box>
        </FormControl>
      </Box>
    </Center>
  );
};

export default Username;
