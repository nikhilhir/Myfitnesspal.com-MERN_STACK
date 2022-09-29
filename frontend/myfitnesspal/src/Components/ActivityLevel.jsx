import { Box, Button, Center, Container, Text } from "@chakra-ui/react";
import React from "react";

const ActivityLevel = ({ formdata, setFormdata ,handleChange }) => {
  return (
    // <Center minH="50vh">

    <Container
      display="flex"
      flexDirection="column"
      // paddingTop={5}
      // paddingBottom={5}
      gap={3}
    >
      <Container variant="outline" border="2px" borderColor="blackAlpha.400">
        <Text fontSize="xl" color="blue">
          Not Very Active
        </Text>
        <Text fontSize="xl">
          Spend most of the day sitting (e.g.,bankteller,desk,job)
        </Text>
      </Container>
      <Container
        variant="outline"
        border="2px"
        cursor="pointer"
        borderColor="blackAlpha.400"
      >
        <Text fontSize="xl" color="blue">
          Lightly Active
        </Text>
        <Text fontSize="xl">
          Spend a good part of the day on your feet(e.g.,teacher,salesperson)
        </Text>
      </Container>
      <Container
        variant="outline"
        border="2px"
        cursor="pointer"
        borderColor="blackAlpha.400"
      >
        <Text fontSize="xl" color="blue">
          Active
        </Text>
        <Text fontSize="xl">
          Spend most of the day doing some physical activity(e.g,food
          server,postal carrier)
        </Text>
      </Container>
      <Container
        variant="outline"
        border="2px"
        cursor="pointer"
        borderColor="blackAlpha.400"
      >
        <Text fontSize="xl" color="blue">
          Very Active
        </Text>
        <Text fontSize="xl">
          Spend most of the day doing some physical activity(e.g,bike
          messenger,carpenter)
        </Text>
      </Container>
    </Container>

    // </Center>
  );
};

export default ActivityLevel;
