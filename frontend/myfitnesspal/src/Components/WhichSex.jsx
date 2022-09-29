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

const WhichSex = ({ formdata, setFormdata, handleChange}) => {
  return (
  

    <Container
      display="flex"
      flexDirection="column"
      paddingTop={5}
      paddingBottom={5}
      gap={5}
    >
  
        <Stack direction="row">
          <Radio name="gender" onChange={handleChange} value="male">
            Male
          </Radio>
          <Radio name="gender" onChange={handleChange} value="female">
            Female
          </Radio>
        </Stack>
        <TransitionExample
          open={"which one should I choose ?"}
          body={
            "Male and female sex hormones affect metabolism. We calculate calorie needs differently depending on the sex you select. If you are intersex, taking gender-affirming medications, or aren’t sure which to select for your needs, tap to learn more."
          }
        />

      <FormControl>
        <FormLabel>When were you born?</FormLabel>
        <Input
          name="date"
          onChange={handleChange}
          value={formdata.date}
          type="date"
        />
        <Box marginTop={5}>
          <FormLabel>Where do you live?</FormLabel>
          <Flex gap={2}>
            <Select
              name="country"
              placeholder="Select country"
              onChange={handleChange}
              value={formdata.country}
            >
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Nigeria">Nigeria</option>
            </Select>
            <Input
              type="Text"
              name="zipcode"
              onChange={handleChange}
              value={formdata.zipcode}
              placeholder="Zip code"
            />
          </Flex>
        </Box>
        <FormHelperText>
          We use this information to calculate an accurate calorie goal for you.
        </FormHelperText>
      </FormControl>
    </Container>
    
  );
};

export default WhichSex;
