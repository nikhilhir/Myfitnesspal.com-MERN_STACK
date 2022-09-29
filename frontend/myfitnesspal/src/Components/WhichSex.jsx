import { Box, Button, Center, Container, Flex, Input, Modal, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import TransitionExample from "./Modal";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const WhichSex = () => {
  return (
    // <Center minH="50vh">
   
        <Container
          display="flex"
          flexDirection="column"
          paddingTop={5}
          paddingBottom={5}
          gap={5}
        >
          <RadioGroup>
            <Stack direction="row">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Stack>
            <TransitionExample
              open={"which one should I choose ?"}
              body={
                "Male and female sex hormones affect metabolism. We calculate calorie needs differently depending on the sex you select. If you are intersex, taking gender-affirming medications, or aren’t sure which to select for your needs, tap to learn more."
              }
            />
          </RadioGroup>

          <FormControl>
            <FormLabel>When were you born?</FormLabel>
            <Input type="date" />
            <Box marginTop={5}>
              <FormLabel>Where do you live?</FormLabel>
              <Flex gap={2}>
                <Select placeholder="Select country">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
                <Input type="Text" placeholder="Zip code" />
              </Flex>
            </Box>
            <FormHelperText>
              We use this information to calculate an accurate calorie goal for
              you.
            </FormHelperText>
          </FormControl>
        </Container>
    // </Center>
  );
};

export default WhichSex;
