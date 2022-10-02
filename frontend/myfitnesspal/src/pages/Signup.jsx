import React from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Container,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Welcome_signup from "../Components/Welcome_signup";
import Weightgoal from "../Components/Weightgoal";
import ActivityLevel from "../Components/ActivityLevel";
import WhichSex from "../Components/WhichSex";
import HeightAndWeight from "../Components/HeightAndWeight";
import EmailPassword from "../Components/EmailPassword";
import Username from "../Components/Username";
import Calories from "../Components/Calories";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [index, setIndex] = useState(0);
  const [formdata, setFormdata] = useState({
    gender: "male",
    dob: "2022 - 09 - 08",
    country: "",
    zipcode: "",
    height: "",
    estweight: "",
    goalweight: "",
    email: "",
    password: "",
    username: "",
  });

  let {
    gender,
    dob,
    country,
    zipcode,
    height,
    estweight,
    goalweight,
    email,
    password,
    username,
  } = formdata;
  let title = [
    "",
    "What is your weight goal?",
    "What is your baseline activity level?",
    "Please select which sex we should use to calculate your calorie needs.",
    "",
    "What is your weekly goal?",
    "Almost there! Create your account.",
    "What is you username",
    "Congratulations",
  ];

  let display = () => {
    if (index === 0)
      return (
        <Welcome_signup
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 1)
      return (
        <Weightgoal
          setIndex={setIndex}
          index={index}
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 2)
      return (
        <ActivityLevel
          setIndex={setIndex}
          index={index}
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 3)
      return (
        <WhichSex
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 4)
      return (
        <HeightAndWeight
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 5)
      return (
        <Calories
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 6)
      return (
        <EmailPassword
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    if (index === 7)
      return (
        <Username
          formdata={formdata}
          setFormdata={setFormdata}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
  };

  const toast = useToast();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !dob ||
      !country ||
      !zipcode ||
      !height ||
      !estweight ||
      !goalweight ||
      !email ||
      !password ||
      !username
    ) {
      return toast({
        position: "top",
        duration: 4000,
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Please fill all the fields, try Again..
          </Box>
        ),
      });
    }

    await axios({
      method: "post",
      url: "https://blooming-plains-40665.herokuapp.com/auth/signup",
      data: formdata,
    });

    toast({
      position: "top",
      duration: 3000,
      render: () => (
        <Box color="white" p={3} bg="green.300">
          Sign up successfull......
        </Box>
      ),
    });
    navigate("/login");
  };

  return (
    <Box as="div" display="flex" alignItems="center" justifyContent="center">
      <Box
        as="div"
        style={{
          flexDirection: "column",
          borderRadius: "2%",
          marginTop: "8%",
          marginBottom: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          Height: "30%",
          width: "40%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div style={{ height: "6px", width: "100%", borderRadius: "150px" }}>
          <div
            style={{
              height: "6px",
              borderRadius: "50px",
              width:
                index === 0
                  ? "11.1%"
                  : index === 1
                  ? "22.2%"
                  : index === 2
                  ? "33.3%"
                  : index === 3
                  ? "44.4%"
                  : index === 4
                  ? "55.5%"
                  : index === 5
                  ? "66.6%"
                  : index === 6
                  ? "77.7%"
                  : index === 7
                  ? "88.8%"
                  : "100%",
              backgroundColor: "blue",
            }}
          ></div>
        </div>
        <Container>
          <FormControl>
            <FormLabel textAlign="center" paddingTop={10} paddingBottom={10}>
              {title[index]}
            </FormLabel>
            {/* body */}
            <div>{display()}</div>
            {index === title.length - 1 ? (
              <Box textAlign="center" paddingTop={10} paddingBottom={10}>
                <Button
                  variant="solid"
                  backgroundColor="#0066ee"
                  color="white"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            ) : index === 0 ? (
              <Box textAlign="center" paddingTop={10} paddingBottom={10}>
                <Button
                  variant="solid"
                  backgroundColor="#0066ee"
                  color="white"
                  onClick={() => setIndex(1)}
                >
                  Continue
                </Button>
              </Box>
            ) : index === 1 ? (
              <Box textAlign="center" paddingTop={10} paddingBottom={10}>
                {/* <Button onClick={() => setIndex(1)}>Continue</Button> */}
              </Box>
            ) : index === 2 ? (
              <Box textAlign="center" paddingTop={10} paddingBottom={10}>
                {/* <Button onClick={() => setIndex(1)}>Continue</Button> */}
              </Box>
            ) : (
              <Box textAlign="center" paddingTop={10} paddingBottom={10}>
                <Button
                  variant="outline"
                  color="#0066ee"
                  border="2px solid "
                  borderColor="#0066ee"
                  width="22%"
                  margin={5}
                  onClick={() => setIndex(index - 1)}
                >
                  Prev
                </Button>
                <Button
                  variant="solid"
                  backgroundColor="#0066ee"
                  color="white"
                  margin={5}
                  width="22%"
                  onClick={() => setIndex(index + 1)}
                >
                  Next
                </Button>
              </Box>
            )}
          </FormControl>
        </Container>
      </Box>
    </Box>
  );
};

export default Signup;
