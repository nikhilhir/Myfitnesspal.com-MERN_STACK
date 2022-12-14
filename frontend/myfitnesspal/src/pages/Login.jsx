import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const toast = useToast();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  let { email, password } = formdata;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async () => {
    if (!email || !password) {
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

    let { data } = await axios({
      method: "post",
      url: "https://blooming-plains-40665.herokuapp.com/auth/login",
      data: formdata,
    });
    //  console.log(data);
    let token = data.token;
    if (token) {
      localStorage.setItem("token", token);
      toast({
        position: "top",
        duration: 2000,
        render: () => (
          <Box color="white" p={3} bg="green.500">
            Logged in successfully
          </Box>
        ),
      });
      nav("/myhome");
    } else {
      return toast({
        position: "top",
        duration: 3000,
        render: () => (
          <Box color="white" p={3} bg="red.500">
            {data.msg}
          </Box>
        ),
      });
    }
  };
  return (
    <div>
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
          <Container>
            <FormControl>
              <FormLabel textAlign="center" paddingTop={6} paddingBottom={6}>
                <Text fontWeight={500} fontSize="2xl">
                  Member Login
                </Text>
              </FormLabel>
              {/* body */}
              <div>
                <Input
                  marginTop={2}
                  name="email"
                  onChange={handleChange}
                  value={formdata.email}
                  type="Text"
                  placeholder="Email address"
                />
                <Input
                  marginTop={2}
                  name="password"
                  onChange={handleChange}
                  value={formdata.password}
                  type="password"
                  placeholder="Password"
                />
              </div>

              <Box textAlign="center" paddingTop={10} paddingBottom={5}>
                <Button
                  width="90%"
                  backgroundColor="#0066ee"
                  onClick={handleSubmit}
                >
                  LOG IN
                </Button>
              </Box>
              <Text fontSize="sm" textAlign="center">
                OR
              </Text>
              <Box textAlign="center" paddingTop={5} paddingBottom={10}>
                <Button width="90%" backgroundColor="#4267b2">
                  CONTINUE WITH FACEBOOK
                </Button>
              </Box>
            </FormControl>
          </Container>
          <Text fontSize="sm" textAlign="center" marginBottom={10}>
            Not a member yet ,{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => nav("/signup")}
            >
              Sign up now
            </span>
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
