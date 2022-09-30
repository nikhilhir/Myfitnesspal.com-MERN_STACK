import React from "react";
import {
    Accordion,
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Badge from "../Components/Badge.jsx";
import Tablecontent from "../Components/Tablecontent.jsx";
import Slider from "../Components/Slider";
import Faqdrop from "../Components/Faqdrop.jsx";
import Botbadge from "../Components/Botbadge.jsx";

const Premium = () => {
  return (
    <div>
      {/* Top section */}
      <div className="topsection">
        <div className="topleft">
          <p className="yellow">Premium</p>
          <br />
          <Heading textAlign="left" size="2xl">
            Start Your Free Trial Today
          </Heading>
          <br />
          <br />
          <p className="gray leftstart">
            Premium members are 65% more likely to reach their weight loss goal.
          </p>
          <br />
          <br />
          <Hide below="500px">
            <Button
              backgroundColor="#0066EE"
              color="white"
              padding="20px"
              height="60px"
            >
              START FREE 1-MONTH TRIAL
            </Button>
          </Hide>
        </div>
        <div className="topright disable">
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpremium-features.8bbea7a1.png&w=1200&q=75"
            alt=""
          />
        </div>
      </div>

      {/* Features section */}
      <Hide below="500px">
        <Flex justifyContent="space-evenly">
          <Badge
            imgsrc={
              "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeal-plans-circle.5b29584a.png&w=256&q=75"
            }
            p1={"Meal Plans & Recipes"}
            p2={"Gain insight into your nutrition"}
          />
          <Badge
            imgsrc={
              "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonalized-goals-circle.7659525c.png&w=256&q=75"
            }
            p1={"Personalized Goals"}
            p2={"Get guidance & coaching tailored to you"}
          />
          <Badge
            imgsrc={
              "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fad-free-circle.3fa88ffe.png&w=256&q=75"
            }
            p1={"Ad-Free Experience"}
            p2={"Focus on your goals without distraction"}
          />
        </Flex>
      </Hide>
      <Hide above="500px">
        <Box width="99%">
          <Flex justifyContent="space-between">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-simple.b5a8d223.png&w=32&q=75"
              alt=""
            />
            <Box width="70%" textAlign="left">
              <p className="boldp">Meal Plans & Recipes</p>
              <p>Gain insight into your nutrition</p>
            </Box>
          </Flex>
          <br />
          <Flex justifyContent="space-between">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-simple.b5a8d223.png&w=32&q=75"
              alt=""
            />
            <Box width="70%" textAlign="left">
              <p className="boldp">Personalized Goals</p>
              <p>Get guidance & coaching tailored</p>
            </Box>
          </Flex>
          <br />
          <Flex justifyContent="space-between">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-simple.b5a8d223.png&w=32&q=75"
              alt=""
            />
            <Box width="70%" textAlign="left">
              <p className="boldp">Ad-Free Experience</p>
              <p>Focus on your goals</p>
            </Box>
          </Flex>
        </Box>
      </Hide>

      {/* Goals Table */}
      <div className="goals">
        <br />
        <br />
        <Heading textAlign="center">Your Goals, Your Way</Heading>
        <p className="gray">
          Advanced tools and in-depth analysis to help you build lifelong
          healthy habits.
        </p>
        <br />
        <br />
        <div className="goaltable">
          <TableContainer>
            <Table variant="striped" colorScheme="gray" whiteSpace="normal">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Free</Th>
                  <Th>Premium</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tablecontent
                  p1={"Nutrition Tracking"}
                  p2={"Log your food from our extensive database."}
                  im1={
                    "https://www.myfitnesspal.com/_next/static/media/check-mark.a58300ae.svg"
                  }
                />
                <Tablecontent
                  p1={"Customizable Carbs, Protein & Fat Goals"}
                  p2={"Track your macros by gram or percentage."}
                />
                <Tablecontent
                  p1={"Guided Fitness & Nutrition Plans"}
                  p2={"Get coaching and content to achieve your goals."}
                />
                <Tablecontent
                  p1={"Custom Home Screen Dashboard"}
                  p2={"Reach goals faster by seeing what’s important to you."}
                />
                <Tablecontent
                  p1={"Food Analysis & Insights"}
                  p2={"Follow your progress through your data."}
                />
                <Tablecontent
                  p1={"Meals & Recipes"}
                  p2={"Learn how to eat with your goals in mind."}
                />
                <Tablecontent
                  p1={"Ad-Free Experience"}
                  p2={"Focus on your fitness and nutrition without ads."}
                />
                <Tablecontent
                  p1={"Subtract Exercise Calories"}
                  p2={"Adjust your day’s calorie goal automatically."}
                />
                <Tablecontent
                  p1={"Quick-Add Carbs, Fat & Protein"}
                  p2={"Log your meals quickly and easily."}
                />
                <Tablecontent
                  p1={"File Export"}
                  p2={"Download CSV files of all your progress."}
                />
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* Victory Stories */}
      <div className="topmargin">
        <Slider />
      </div>

      {/* Dropdown */}
      <div className="topmargin">
        <p className="yellow center">Premium</p>
        <br />
        <Heading textAlign={"center"}>Frequently Asked Questions</Heading>
        <div className="goaltable">
          <Accordion defaultIndex={[0]} allowMultiple>
            <Faqdrop head={"When will I get charged?"} p={"If you’ve never upgraded to Premium or never started a Premium trial before, you are eligible for a 1-month trial, and the first Premium subscription charge on your credit card will be after the trial. Once the trial ends, your subscription will auto-renew unless you cancel. If you purchased a monthly subscription, you will get charged every month. If you purchased an annual subscription, you will be charged every year."}/><br/>
            <Faqdrop head={"Will my subscription autometically renew?"} p={"MyFitnessPal Premium features are available on a monthly or yearly subscription basis, depending on which one you purchase. By default, your subscription will renew automatically when your membership period is up—unless you manually cancel your subscription."}/><br/>
            <Faqdrop head={"Can I cancel anytime?"} p={"Yes, you may cancel your recurring subscription at any time. Cancel at least 24 hours before the next renewal date to avoid being charged for the upcoming billing cycle. When you cancel, you are canceling the next billing charge—Premium features will remain available to you until the end of your current paid subscription period, regardless of when you cancel the automatic renewal."}/><br/>
            <Faqdrop head={"What do I need to upgrade?"} p={"Just tap one of the buttons below to start a monthly or annual subscription. A Premium subscription adds more extensive options to MyFitnessPal's feature set, increasing customizability and flexibility. Your MyFitnessPal account will stay just as you've built it—friends, favorite foods, diary history—with many new and enhanced features added once you go Premium."}/><br/>
          </Accordion>
        </div>
      </div>

      {/* Go premium */}
      <div className="topmargin bottomsec">
          <p className="yellow center" style={{width:"150px"}}>1-MONTH FREE</p><br />
          <Heading textAlign={"center"}>Go Premium, Get Results</Heading><br />
          <p className="gray fifty">Choose a MyFitnessPal Premium plan to start your 1-month free trial. You will be charged after the trial has ended—cancel anytime.</p><br />
          <div className="botflex"><Flex flexWrap={"wrap"} justifyContent="space-between">
            <Botbadge p1={"SAVE 58%"} p2={"ANNUAL"} p3={"₹3,100.00 billed yearly after free trial ends."} h={"₹3,100.00 "}/>
            <Botbadge p1={"SAVE 20%"} p2={"MONTHLY"} p3={"₹620.00 billed monthly after free trial ends."} h={"₹620.00"}/>
          </Flex></div>
      </div>
    </div>
  );
};

export default Premium;