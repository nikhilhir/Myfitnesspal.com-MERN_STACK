import React from 'react'
import { Box, Button, Flex, Heading, Hide } from '@chakra-ui/react';
import Badge from "../Components/Badge.jsx";

const Premium = () => {
  return (
    <div>
        {/* Top section */}
        <div className='topsection'>
            <div className='topleft'>
                <p className='yellow'>Premium</p><br />
                <Heading textAlign="left" size="2xl">Start Your Free Trial Today</Heading><br /><br />
                <p className='gray leftstart'>Premium members are 65% more likely to reach their weight loss goal.</p><br /><br />
               <Hide below="500px"><Button backgroundColor="#0066EE" color="white" padding="20px" height="60px">START FREE 1-MONTH TRIAL</Button></Hide>
            </div>
            <div className='topright disable'>
                <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpremium-features.8bbea7a1.png&w=1200&q=75" alt=""/>
            </div>
        </div>

        {/* Features section */}
        <Hide below='500px'><Flex justifyContent="space-evenly">
            <Badge imgsrc={"https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeal-plans-circle.5b29584a.png&w=256&q=75"} p1={"Meal Plans & Recipes"} p2={"Gain insight into your nutrition"}/>
            <Badge imgsrc={"https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonalized-goals-circle.7659525c.png&w=256&q=75"} p1={"Personalized Goals"} p2={"Get guidance & coaching tailored to you"}/>
            <Badge imgsrc={"https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fad-free-circle.3fa88ffe.png&w=256&q=75"} p1={"Ad-Free Experience"} p2={"Focus on your goals without distraction"}/>
        </Flex></Hide>
        <Hide above='500px'>
            <Box width="99%">
                <Flex justifyContent="space-between">
                    <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-simple.b5a8d223.png&w=32&q=75" alt="" />
                    <Box width="70%" textAlign="left">
                        <p className='boldp'>Meal Plans & Recipes</p>
                        <p>Gain insight into your nutrition</p>
                    </Box>
                </Flex><br />
                <Flex justifyContent="space-between">
                    <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-simple.b5a8d223.png&w=32&q=75" alt="" />
                    <Box width="70%" textAlign="left">
                        <p className='boldp'>Personalized Goals</p>
                        <p>Get guidance & coaching tailored to you</p>
                    </Box>
                </Flex><br />
                <Flex justifyContent="space-between">
                    <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-simple.b5a8d223.png&w=32&q=75" alt="" />
                    <Box width="70%" textAlign="left">
                        <p className='boldp'>Ad-Free Experience</p>
                        <p>Focus on your goals without distraction</p>
                    </Box>
                </Flex>
            </Box>
        </Hide>
    </div>
  )
}

export default Premium