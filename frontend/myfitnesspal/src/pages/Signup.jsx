import React from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Container,
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

const Signup = () => {
  let [index, setIndex] = useState(0);
  const [formdata,setData] = useState({
    gender:"",dob:"",country:"",zipcode:"",height:"",
    estweight:"",goalweight:"",email:"",password:"",
    username:""
  })
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
    if (index === 0) return <Welcome_signup />;
    if (index === 1) return <Weightgoal />;
    if (index === 2) return <ActivityLevel />;
    if (index === 3) return <WhichSex />;
    if (index === 4) return <HeightAndWeight />;
    if (index === 5) return <Calories />;
    if (index === 6) return <EmailPassword />;
    if (index === 7) return <Username />;
  };

  return (
    <Box as="div" display="flex" alignItems="center" justifyContent="center">
      <Box
        as="div"
        style={{
          flexDirection:"column",
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
        <div style={{height:"6px",width:"100%",borderRadius:"150px"}}>
          <div style={{height:"6px",borderRadius:"50px",
          width:index===0 ? '11.1%' : index===1?"22.2%": index===2?"33.3%" : index===3?"44.4%": index===4?"55.5%": index===5?"66.6%": index===6?"77.7%" :index===7?"88.8%":"100%"
          ,backgroundColor:"blue"}}></div>
        </div>
        <Container>
          <FormControl>
            <FormLabel textAlign="center" paddingTop={10} paddingBottom={10}>
              {title[index]}
            </FormLabel>
            {/* body */}
            <div>{display()}</div>

            <Box textAlign="center" paddingTop={10} paddingBottom={10}>
              <Button
                disabled={index === 0 ? true : false}
                margin={5}
                onClick={() => setIndex(index - 1)}
              >
                Prev
              </Button>
              <Button
                disabled={index === title.length-1 ? true : false}
                margin={5}
                onClick={() => setIndex(index + 1)}
              >
                Next
              </Button>
            </Box>
          </FormControl>
        </Container>
      </Box>
    </Box>
  );
};

export default Signup;
