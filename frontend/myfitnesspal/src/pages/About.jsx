import React from "react";
import styled from "styled-components";
import burger from "../assests/burger.png";
import watch from "../assests/watch.png";

const About = () => {
  return (
    <>
      <Wrapper>
        <LeftDiv>
          <h1
            style={{
              color: "rgb(10,82,130)",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Lose Weight with MyFitnessPal.com — for FREE!
          </h1>
          <br />
          <br />
          <p>
            Losing weight isn't easy - we know. But with a membership to
            MyFitnessPal.com, you'll get the tools you need to successfully take
            weight off - and keep it off. And best of all, you can signup for
            free, no strings attached. So put away your credit card - you'll
            never have to pay a cent.
          </p>
          <br />
          <p>
            Study after study has confirmed the benefits of keeping track of the
            food you eat and the activity you do. It's simple - the more
            consistently you track your food intake, the more likely you are to
            lose weight. That's why every successful weight management program
            suggests that you keep a food diary and/or an activity log. But
            recording everything you eat without the right tools can be tedious
            at best, or simply impossible at worst.
          </p>
          <br />
          <p>
            At MyFitnessPal.com, we focus on making sure you can log your meals
            as quickly and easily as possible. Because the easier we make it for
            you, the more likely you are to stay on track, and the more likely
            you are to succeed in your weight loss goals.
          </p>
          <br />
          <br />
          <img src={burger} alt="" />
          <br />
          <br />
          <h4
            style={{
              color: "rgb(10,82,130)",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            With a FREE membership you get:
          </h4>
          <br />
          <br />
          <ul className="list0">
            <li>
              <h5>
                <span>The easiest to use food diary on the web -</span>
              </h5>

              <p>
                {" "}
                Track what you eat with just a few clicks from anywhere with an
                internet connection - at home or at work
              </p>
            </li>

            <li>
              <h5>
                <span>
                  A searchable food database of over 300,000,000 items -
                </span>
              </h5>

              <p> and it's growing every day!</p>
            </li>

            <li>
              <h5>
                <span>Your own personal food database -</span>
              </h5>

              <p>
                add your own foods and recipes at any time and access them from
                anywhere with an internet connection
              </p>
            </li>

            <li>
              <h5>
                <span>Free mobile apps for iPhone and Android -</span>
              </h5>

              <p>
                so you can log your meals and exercise even when you are on the
                go
              </p>
            </li>

            <li>
              <h5>
                <span>Support and motivation </span>
              </h5>

              <p>
                from people just like you - Our discussion forums let you learn
                from others, share your own tips, receive and give
                encouragement, and make friends.
              </p>
            </li>

            <li>
              <h5>A personalized diet profile</h5>

              <p>- customized to your unique weight loss goals.</p>
            </li>

            <li>
              <h5>
                <span>Flexibility</span>
              </h5>

              <p>
                - our system can support any diet like Atkins, the South Beach
                Diet, the Zone, and more. No matter what diet you're on, we can
                help.
              </p>
            </li>
          </ul>
          <br />
          <br />

          <h4
            style={{
              color: "rgb(10,82,130)",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Don't wait! Start losing weight the healthy way - all for FREE!
          </h4>
          <br />
          <br />
          <img src={watch} alt="" />
        </LeftDiv>
        <RightDiv>
          {/* ************************************************* */}
          <form style={{ display: "inline-block", float: "top" }} />
          <input type="hidden" name="authenticity_token" />
          {/* action="https://www.myfitnesspal.com/account/login" acceptCharset="UTF-8" method="post"/><input name="utf8" type="hidden" value="✓" */}
          {/* value="9DftKw3Pvm8Cisrcb1QxRyDGB6OLQevLopOysmBJLgDve20Ez/nnbuWgKK4gCa0x5Mz24Tu1YrmZpKiG/pGmXQ==" */}
          <div className="member-login">
            <h2
              style={{
                color: "rgb(10,82,130)",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Member Login
            </h2>
            <ul>
              <li>
                <div
                  className="fb-login-button fb_iframe_widget"
                  data-onlogin="MFP.onFBLogin();"
                  data-max-rows="1"
                  data-size="large"
                  data-button-type="login_with"
                  data-show-faces="false"
                  data-auto-logout-link="false"
                  data-use-continue-as="true"
                  login_text="Log in with Facebook"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=186796388009496&amp;auto_logout_link=false&amp;button_type=login_with&amp;container_width=234&amp;locale=en_US&amp;login_text=Log%20in%20with%20Facebook&amp;max_rows=1&amp;sdk=joey&amp;show_faces=false&amp;size=large&amp;use_continue_as=true"
                >
                  <span
                    style={{
                      verticalalign: "bottom",
                      width: "241px",
                      height: "40px",
                    }}
                  >
                    <iframe
                      name="f3bf508c749e3a4"
                      width="1000px"
                      height="1000px"
                      data-testid="fb:login_button Facebook Social Plugin"
                      title="fb:login_button Facebook Social Plugin"
                      frameBorder="0"
                      allowtransparency="true"
                      allowFullScreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v3.2/plugins/login_button.php?app_id=186796388009496&amp;auto_logout_link=false&amp;button_type=login_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df22292468009ee4%26domain%3Dwww.myfitnesspal.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.myfitnesspal.com%252Ff145824be79650c%26relation%3Dparent.parent&amp;container_width=234&amp;locale=en_US&amp;login_text=Log%20in%20with%20Facebook&amp;max_rows=1&amp;sdk=joey&amp;show_faces=false&amp;size=large&amp;use_continue_as=true"
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: "241px",
                        height: "40px",
                      }}
                      className=""
                    ></iframe>
                  </span>
                </div>
              </li>
              <li className="or">or</li>
              <li>
                <label>Username:</label>
                <input
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                  type="text"
                  name="username"
                  id="username"
                  value=""
                  size="12"
                  className="text"
                />
              </li>
              <li>
                <label>Password:</label>
                <input
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                  type="password"
                  name="password"
                  id="password"
                  value=""
                  size="12"
                  className="text"
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  value="1"
                  className="checkbox"
                  checked="checked"
                />
                <label for="remember_me">Remember me next time</label>
              </li>
              <li className="submit">
                <input
                  type="submit"
                  value="Log In"
                  style={{ background: "gray" }}
                />
              </li>
            </ul>
          </div>
          <ul className="forgot">
            <li>
              <a href="/account/forgot_password" style={{ color: "skyblue" }}>
                Forgot password or username?
              </a>
            </li>
            <li>
              Not a member yet?{" "}
              <a href="/account/create" style={{ color: "skyblue" }}>
                Sign up now!
              </a>
            </li>
          </ul>
          <form />
          {/* **************************************************** */}
        </RightDiv>
      </Wrapper>
    </>
  );
};

export default About;

const Wrapper = styled.section`
  margin-top: 20px;
  margin: auto;
  padding: 4em;
  display: flex;
  //flex-wrap:wrap;
  align-items: center;
  background: rgb(255, 255, 255);
  font-size: 14px;
  font-family: sans-serif;
`;

const LeftDiv = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px;
  margin: 20px;
  margin: auto;
  height: auto;
  width: 60%;
  padding: 30px;
`;

const RightDiv = styled.section`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  height: auto;
  margin-bottom: 1000px;
`;
