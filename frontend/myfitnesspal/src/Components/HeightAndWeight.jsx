import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  Modal,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import TransitionExample from "./Modal";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const HeightAndWeight = () => {
  return (
    // <Center minH="50vh">
  
        <Container
          display="flex"
          flexDirection="column"
          paddingTop={5}
          paddingBottom={5}
          gap={5}
        >
          <FormControl>
            <Box>
              <FormLabel>How tall are you?</FormLabel>
              <Input type="text" placeholder="height in cm" />
            </Box>
            <Box marginTop={5}>
              <FormLabel>How much do you weigh?</FormLabel>
              <FormHelperText>
                It's OK to estimate. You can update this later.
              </FormHelperText>
              <Input marginTop={2} type="Text" placeholder="Current weight        kg" />
            </Box>
            <Box marginTop={5}>
              <FormLabel>What's your goal weight?</FormLabel>
              <FormHelperText>
                Don't worry. This doesn't affect your daily calorie goal and you
                can always change it later.
              </FormHelperText>
              <Input marginTop={2} type="Text" placeholder="Goal weight          kg" />
            </Box>
          </FormControl>
        </Container>
    // </Center>
  );
};

export default HeightAndWeight;
