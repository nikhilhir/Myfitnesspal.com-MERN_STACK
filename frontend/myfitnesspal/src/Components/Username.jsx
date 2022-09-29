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

const Username = ({ formdata, setFormdata, handleChange }) => {
  return (
    // <Center minH="50vh">

    <FormControl>
      <Box marginTop={5}>
        <Input
          marginTop={2}
          name="username"
          type="Text"
          onChange={handleChange}
          value={formdata.username}
          placeholder="Create a username"
        />
      </Box>
    </FormControl>

    // </Center>
  );
};

export default Username;
