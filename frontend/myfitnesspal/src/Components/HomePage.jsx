import React from 'react'
import {
  Box,
  Button,
 Flex,
 Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../Styling/HomePage.module.css";
import { SearchIcon } from "@chakra-ui/icons";

import diary from "../assests/diary.PNG";
import barcode from "../assests/barcode.PNG";
import shoe from "../assests/shoe.PNG";

// import stephanie from "../assests/Stephanie.PNG";
// import eric from "../assests/Eric.PNG";
// import lori from "../assests/Lori.PNG";

import appStore from "../assests/app-store.PNG";
import googlePlay from "../assests/google-play.PNG";
import BestSellers from './BestSellers';


const HomePage = () => {

  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box className={style.top_section}>
          <Box className={style.left_column}>
            <Box height={"82.7%"} width="100%"></Box>
            <Box
              height={"17.3%"}
              width="100%"
              className={style.bottom_left_column}
            ></Box>
          </Box>
          <Box className={style.mid_column}>
            <Box className={style.container}>
              <Box className={style.heading}>
                <Heading size={{ base: "xl", sm: "2xl" }} as={"h1"}>
                  Fitness starts with what you eat.
                </Heading>
              </Box>
              <Text
                className={style.description}
                fontSize={{ base: "md", sm: "2xl", md: "2xl" }}
              >
                Take control of your goals. Track calories, break down
                ingredients, and long activities with MyFitnessPal.
              </Text>
              <Button
                colorScheme={"blue"}
                width={{ base: "150px", md: "150px", lg: "200px" }}
                height="50"
                onClick={() => navigate("/signup")}
              >
                START FOR FREE
              </Button>

              <Text onClick={() => navigate("/login")}>
                Already have an account?{" "}
                <Link to={"#"}>
                  <span style={{ color: "blue" }}>Login</span>
                </Link>
              </Text>
            </Box>
          </Box>
          <Box className={style.right_column}></Box>
        </Box>
        {/* **************************************************** */}
        <Box className={style.second_section}>
          <Box className={style.whiteLine}></Box>
          <Box className={style.second_section_heading}>
            <Heading as="h1" size="xl">
              Search over 11 million foods in our database.
            </Heading>
          </Box>
          <Box className={style.second_section_des}>
            <Text fontSize="md" lg="xl">
              What's in your food? Learn about calories count, nutritions
              information and serving size.
            </Text>
          </Box>
        </Box>
        {/* ******************************************************************* */}
        <Box className={style.third_section}>
          <Box className={style.third_section_img}>
            <Box className={style.input_box}>
              <Box className={style.inner_input_box}>
                <input placeholder="Get the nutrition for any food, like an apple" />
              </Box>
              <Box className={style.search_Icon}>
                <SearchIcon />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* ********************************************** */}
        <Box className={style.fourth_section}>
          <Box className={style.fourth_section_innerBox}>
            <Box className={style.fourth_section_heading} mt={"16"}>
              <Heading as={"h3"} size={{ base: "lg", lg: "2xl" }}>
                The Tools for Your Goals
              </Heading>
            </Box>
            <Box className="{fourth-section-des}" mt={{ base: 2, lg: 5 }}>
              <Text fontSize={{ base: "md", lg: "lg" }}>
                Trying to lose weight, tone up, lower your BMI, or invest in
                your overall health? We give you the right features to hit your
                goals.
              </Text>
            </Box>
            <Flex
              m={{ base: "4", md: 8, lg: 16 }}
              gap={{ base: "20px", lg: "40px" }}
              flexDirection={{ base: "column", lg: "row", md: "column" }}
            >
              <Box>
                <Box>
                  <Image src={diary} m={"auto"} />
                </Box>
                <Box m={{ base: 1, lg: 2 }}>
                  <Heading as={"h5"} size="md">
                    Learn. Track. Improve.
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }}>
                    Keeping a food diary helps you understand your habits and
                    increases your likehood of hitting your goals.
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Image src={barcode} m="auto" />
                </Box>
                <Box m={{ base: 1, lg: 2 }}>
                  <Heading as={"h5"} size="md">
                    Logging Simplified
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }}>
                    Scan barcodes, save meals and recipes, and use Quick Tools
                    for fast and easy food tracking.
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Image src={shoe} m={"auto"} />
                </Box>
                <Box m={{ base: 1, lg: 2 }}>
                  <Heading as={"h5"} size="md">
                    Stay Motivated
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }}>
                    Join the World’s Largest Fitness Community for advice, tips,
                    and support 24/7.
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Box textAlign={"center"} p="5">
              <Button colorScheme="blue" p="6">
                START YOUR JOURNEY TODAY
              </Button>
            </Box>
          </Box>
        </Box>
        {/* **************************************************************? */}
        <BestSellers/>
        
        {/* ********************************************************** */}
        <Box className={style.sixth_section}>
          <Box className={style.sixth_section_heading}>
            <Heading as={"h2"} size={{ base: "xl", sm: "2xl" }}>
              Recipes & Inspiration
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} p={{ base: 2, lg: "8" }}>
              Get nutritionist-approved recipes and motivational workout tips
              from MyFitnessPal experts.
            </Text>
          </Box>
          <Flex
            gap={{ base: 6, lg: 8 }}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            mt={{ base: 2, lg: 4 }}
          >
            <Box className={style.sixth_section_cards}>
              <Box>
                <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" />
              </Box>
              <Box m={{ base: 2, lg: 3 }} h={{ base: "40px", lg: "50px" }}>
                <Heading as={"h5"} size={"sm"}>
                  15 Make-Ahead Breakfasts Under 300 Calories
                </Heading>
              </Box>
              <Box m={3}>
                <Text color={"blue"} fontWeight="bold">
                  <Link to={"#"}>MyFitnessPal Blog</Link>
                </Text>
              </Box>
            </Box>
            <Box className={style.sixth_section_cards}>
              <Box>
                <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75" />
              </Box>
              <Box m={{ base: 2, lg: 3 }} h={{ base: "40px", lg: "50px" }}>
                <Heading as={"h5"} size={"sm"}>
                  The Problem With Cheat Days
                </Heading>
              </Box>
              <Box m={3}>
                <Text color={"blue"} fontWeight="bold">
                  <Link to={"#"}>MyFitnessPal Blog</Link>
                </Text>
              </Box>
            </Box>
            <Box className={style.sixth_section_cards}>
              <Box>
                <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75" />
              </Box>
              <Box m={{ base: 2, lg: 3 }} h={{ base: "40px", lg: "50px" }}>
                <Heading as={"h5"} size={"sm"}>
                  Essential Guide to Getting Moving
                </Heading>
              </Box>
              <Box m={3}>
                <Text color={"blue"} fontWeight="bold">
                  <Link to={"#"}>MyFitnessPal Blog</Link>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* ****************************************** */}
        <Box className={style.seventh_section}>
          <Box
            className={style.seventh_section_heading}
            mt={{ base: "20px", lg: "24px" }}
          >
            <Heading as="h1" size={{ base: "xl", sm: "2xl" }}>
              Connect with over 50 apps.
            </Heading>
          </Box>
          <Box pt={{ base: 4, md: 6 }}>
            <Text fontSize={{ base: "md", sm: "xl" }}>
              Easily link your MyFitnessPal account with apps that support your
              healthier lifestyle. It’s not just about calories. It’s about
              feeling better, looking better, and living better.
            </Text>
          </Box>
          <Box mt={[8, 16]}>
            <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" />
          </Box>
          <Flex justifyContent={"center"} mt={16} w={{ base: "80%" }} m="auto">
            <Image src={appStore} w={["150px", "200px"]} />
            <Image src={googlePlay} w={["150px", "200px"]} />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default HomePage