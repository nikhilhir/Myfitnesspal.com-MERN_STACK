import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const SecondaryNav = () => {
  return (
    <Container>
      <SecondDiv>
        <Link to="/about">ABOUT</Link>
        <Link to="/food">FOOD</Link>
        <Link to="/exercise">EXERCISE</Link>
        <Link to="/app">APPS</Link>
        <Link to="/community">COMMUNITY</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/premium">PREMIUM</Link>
      </SecondDiv>
    </Container>
  );
};

const Container = styled.div`
  // border: 1px solid red;
  height: 3rem;
  width: 100%;
  display: flex;
  gap: 20px;
  background-color: rgb(0, 102, 238);
  color: white;
  font-weight: 100px;
`;
const SecondDiv = styled.div`
  margin-left: 200px;
  display: flex;
  gap: 30px;
  padding-top: 15px;
  font-weight: 700;
  font-size: 13px;
  justify-content: center;
`;
