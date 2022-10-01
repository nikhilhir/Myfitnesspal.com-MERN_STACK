import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styling/BlogHomepage.module.css";
import * as Icons from "react-icons/fa";
import logo from "../assests/fitnesslogo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/image";
import blogabove from "../assests/blogabove.png"




const TRENDINGARTICLESDATA = [
  {
    id: 1,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/49723-featured-700x400.jpg",
    des: "3 Metabolism-Boosting Micronutrients For Weight Loss",
  },
  {
    id: 2,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/41628-featured-700x400.jpg",
    des: "10 Walking Mistakes to Avoid if You Want to Lose Weight",
  },
  {
    id: 3,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12131-featured-700x400.jpg",
    des: "Apple Pie Breakfast Bowl",
  },
  {
    id: 4,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/19653-featured-700x400.jpg",
    des: "How to Establish a Healthy Morning Routine",
  },
  {
    id: 5,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg",
    des: "Essential Guide to MyFitnessPall Premium",
  },
  {
    id: 6,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/30083-featured-700x400.jpg",
    des: "Your 6-Week Belly Fat Blasting Walking Plan",
  },
  {
    id: 7,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/28920-featured-700x400.jpg",
    des: "Your 10-minute, No-Equipment, Total-Body Workout",
  },
  {
    id: 8,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg",
    des: "15 Make-Ahead Breakfasts Under 300 Calories",
  },
  {
    id: 9,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52179-featured-700x400.jpg",
    des: "Your Home Screen is Getting a Makeover",
  },
  {
    id: 10,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/46597-featured-700x400.jpg",
    des: "Nutrition Extras to Boost Mental and Physical Performance",
  },
];

const BlogHomepage = () => {
    const [show, setShow] = useState(false);
  return (
    <>
      {/* *****************  NAVBAR *************************** */}
      <div>
        {/* ******************Home Icon main page********** */}
        <div className={style.homeicondiv}>
          <Link to="/">
            <Icons.FaHome className={style.homeicon} />
          </Link>
        </div>
        <div
          style={{
            textAlign: "center",
            cursor: "pointer",
            width: "20%",
            margin: "auto",
          }}
        >
          <img src={logo} alt="" />
        </div>
        <div className={style.socialMediaIconDiv}>
          <Icons.FaFacebookSquare className={style.socialMediaIconFB} />
          <Icons.FaTwitterSquare className={style.socialMediaIconTwitter} />
          <Icons.FaInstagram className={style.socialMediaIconInsta} />
          <Icons.FaPinterest className={style.socialMediaIconPin} />
          <hr />
          <Icons.FaSearch className={style.socialMediaIconSearch} />
        </div>
        <div className={style.SubHeader_Container}>
          <a href="https://blog.myfitnesspal.com/recipes/" alt="">
            <div>RECIPES</div>
          </a>
          <a href="https://blog.myfitnesspal.com/category/nutrition" alt="">
            <div>NUTRITION</div>
          </a>
          <a href="https://blog.myfitnesspal.com/category/weight-loss/">
            <div>WEIGHT LOSS</div>
          </a>
          <div>FITNESS</div>
          <div>INSPIRATION</div>
          <div>ESSENTIALS</div>
          <div>VIDEO</div>
        </div>
      </div>
      {/* ******************************************** */}
      <div className={style.blogMainContainer}>
        <Image src={blogabove} />
        <div>
          <div className={style.TRENDINGDiv}>
            <div>
              <h4>TRENDING ARTICLES</h4>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.slide}>
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {TRENDINGARTICLESDATA.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide-content">
                    <div className={style.sliderImageDiv}>
                      <img
                        src={item.img}
                        alt=""
                        className={style.sliderImage}
                      />
                    </div>
                    <div className={style.sliderText}>{item.des}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* ******************************************************* */}
      <div className={style.MainLatestArticlesDiv}>
        <div className={style.LATESTDiv}>
          <div>
            <h4>LATEST ARTICLES</h4>
          </div>
          <div className={style.line2}></div>
        </div>
        <div></div>
        <div>
          <div>
           
            <img style={{width:"70%", height:"500",alignItems:"center",marginLeft:"250px"}}  src="https://blog.myfitnesspal.com/wp-content/uploads/2022/03/Which-Store-Bought-Coffee-Creamer-Is-Healthiest-1140x545.jpg" class="img-responsive js-lazy-image wp-post-image" alt="Which Store-Bought Coffee Creamer Is Healthiest" loading="lazy"></img>
          </div>
          <div className={style.trendingBlogImages}>
            <div></div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2017/10/How-to-Make-Your-Own-Almond-Butter-1-750x592.jpg.webp"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                How to Make Your Own Almond Butter
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 15, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/3-Perks-of-Hot-Weather-Workouts-750x592.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                3 Perks of Hot-Weather Workouts
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 13, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/5-Smart-and-Simple-Ways-to-Stay-Hydrated-750x592.jpg.webp"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                5 Smart and Simple Ways to Stay Hydrated
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 11,2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/How-to-Stay-Healthy-and-on-Track-With-Your-Health-Goals-on-Vacation-750x592.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                How to Stay on Track With Your Health Goals on Vacation
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 8,2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/08/10-Foods-That-Dietitians-Eat-on-Road-Trips-750x592.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                10 Foods That Dietitians Eat on Road Trips
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 6,2022</p>
            </div>
          </div>

          {show ? (
            <div className={style.trendingBlogImages}>
              <div>
                <img
                  className={style.trendingBlogGridImages}
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Mixed-Berry-Tart-2-750x592.jpg.webp"
                  alt=""
                />
                <h4 className={style.trendingBlogGridHeading}>
                  Mixed Berry Tart
                </h4>
                <p className={style.trendingBlogGridPara}>JULY 4, 2022</p>
              </div>
              <div>
                <img
                  className={style.trendingBlogGridImages}
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2019/07/15-Festive-Fourth-of-July-Recipes-Under-425-Calories-750x592.jpeg.webp"
                  alt=""
                />
                <h4 className={style.trendingBlogGridHeading}>
                  15 Festive Fourth of July Recipes Under 425 Calories
                </h4>
                <p className={style.trendingBlogGridPara}>JULY 1, 2022</p>
              </div>
              <div>
                <img
                  className={style.trendingBlogGridImages}
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/5-Ways-to-Progress-From-Walking-to-Running-750x592.jpg"
                  alt=""
                />
                <h4 className={style.trendingBlogGridHeading}>
                  5 Ways to Progress From Walking to Running
                </h4>
                <p className={style.trendingBlogGridPara}>JUNE 29, 2022</p>
              </div>
              <div>
                <img
                  className={style.trendingBlogGridImages}
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2021/09/How-Much-Water-Should-You-Actually-Drink-750x592.jpg"
                  alt=""
                />
                <h4 className={style.trendingBlogGridHeading}>
                  How Much Water Should You Actually Drink?
                </h4>
                <p className={style.trendingBlogGridPara}>JUNE 27, 2022</p>
              </div>
              <div>
                <img
                  className={style.trendingBlogGridImages}
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/9-Healthy-Burger-Recipes-Under-450-Calories-750x592.jpeg"
                  alt=""
                />
                <h4 className={style.trendingBlogGridHeading}>
                  9 Healthy Burger Recipes Under 450 Calories
                </h4>
                <p className={style.trendingBlogGridPara}>JUNE 24, 2022</p>
              </div>
              <div>
                <img
                  className={style.trendingBlogGridImages}
                  src="https://blog.myfitnesspal.com/wp-content/uploads/2020/02/How-an-Athletes-Weight-Impacts-Macro-Needs-3-750x592.jpg"
                  alt=""
                />
                <h4 className={style.trendingBlogGridHeading}>
                  How an Athlete’s Weight Impacts Macro Needs
                </h4>
                <p className={style.trendingBlogGridPara}>JUNE 22, 2022</p>
              </div>
            </div>
          ) : null}
        </div>
        <div onClick={() => setShow(true)} className={style.blogHomeLoadMore}>
          <p>LOAD MORE</p>
        </div>
      </div>
    </>
  );
};

export default BlogHomepage;
