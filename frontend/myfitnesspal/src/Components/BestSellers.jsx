import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import style from "../Styling/HomePage.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Link as RouteLink} from "react-router-dom"
import stephanie from "../assests/Stephanie.PNG";
import eric from "../assests/Eric.PNG";
import lori from "../assests/Lori.PNG";

SwiperCore.use([Navigation, Pagination, Scrollbar]);


const data = [
  {
    id: 1,
    image:stephanie,
      // "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-1.jpg&w=1920&q=75",
    head: "KJAER WEIS",
    name: "The Beautiful Eye Balm",
    price: 65,
  },
  {
    id: 2,
    image:eric,
      // "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-2.jpg&w=1920&q=75",
    head: "DYSON",
    name: "Air Wrap Multi-Styler",
    price: 599,
  },
  {
    id: 3,
    image:lori,
      // "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75",
    head: "M-61",
    name: "PowerGlow Peel",
    price: 32,
  },
 
];

const BestSellers = () => {
  return (
    <>
      <Box>
        <Box className={style.fifth_section_heading}>
          <Heading as={"h1"} size={{ base: "xl", sm: "2xl" }}>
            Victory Stories
          </Heading>
        </Box>
        <Box className={style.fifth_section_des}>
          <Text fontSize={{ base: "md", lg: "lg" }} >
            When you reach your goals, our whole community celebrates with you.
            That’s over 200 million members sharing in your victory—using it to
            inspire their own journey.
          </Text>
        </Box>
      </Box>
      
      <Swiper
        loop={true}
        spaceBetween={5}
        slidesPerView={1}
        slidesPerGroup={1}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((el) => (
          <SwiperSlide key={el.id} style={{ margin: "auto" }}>
            <RouteLink to={`/productdetail/${el.id}`}>
              <Stack textAlign={"center"}>
               
                <div className={style.carousel_inner}>
                  <div className={style.carousel_item_active}>
                    <Image
                      style={{
                        height: "500px",
                        width: "700px",
                        alignItems: "center",
                        margin: "auto",
                      }}
                      src={el.image}
                    />
                  </div>
                 
                </div>
              </Stack>
            </RouteLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BestSellers;
