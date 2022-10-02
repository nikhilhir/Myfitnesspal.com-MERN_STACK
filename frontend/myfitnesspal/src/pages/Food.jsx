import { Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import styled from "styled-components";
import side from '../assets/side.png'
import Empty from '../Components/Empty';
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios';


const MainDiv = styled.div`
  width: 100%;
  margin-top: 15px;
  
`;

const BodyDiv = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  margin-top: 20px;
  justify-content: space-between;
  // border: 1px solid black;
`;
const RightAdv = styled.div`
  width: 35%;
  img {
    width: 100%;
  }
`;
const LeftDiv = styled.div`
  width: 75%;
  padding:10px 20px
`;
const ItemDiv= styled.div`
width:100%;
display:flex;
justify-content:space-between;
border-bottom:1px solid black;
padding:10px;
`;
const Food = () => {

    let [food,setFood]= useState([])
    let [text,setText]= useState("")

    const getdata=async(any)=>{
  

  const options = {
    method: "GET",
    url: "https://dietagram.p.rapidapi.com/apiFood.php",
    params: { name: `${any}` },
    headers: {
      "X-RapidAPI-Key": "dcac316f37msh5a5633b873118b4p12dbe2jsn230846c97468",
      "X-RapidAPI-Host": "dietagram.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setFood(response.data.dishes);
    })
    .catch(function (error) {
      console.error(error);
    });
   
    
    }
  return (
    <MainDiv>
      <BodyDiv>
        <LeftDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "5px",
            }}
          >
            <input
              style={{ width: "100%", border: "none", outline: "none" }}
              placeholder="Please search for a food by putting just first letter , branch or a restaurant"
              onChange={(e) => setText(e.target.value)}
            ></input>
            <BiSearchAlt2
              cursor="pointer"
              onClick={() => getdata(text)}
              size={40}
            />
          </div>

          <div>
            {food.length === 0 ? (
              <div style={{ marginLeft: "15%", marginTop: "20%" }}>
                <Empty />
                <h2>Food Analysis</h2>
                <h4>
                  Understand how the food you’re eating contributes to your
                  daily calories, macronutrients, and micronutrients.
                </h4>
              </div>
            ) : (
              food.map((e) => {
                return (
                  <ItemDiv key={e.id}>
                    <div>
                      <h4 style={{color:"blue"}}>{e.name}</h4>
                      <div style={{display:"flex",gap:"10px"}}
                      <h4>{e.name}</h4>

                      <div style={{display:"flex",gap:"8%"}}>


                        <h6>calories:{e.caloric}</h6>
                        <h6>fat:{e.fat}</h6>
                        <h6>carbon:{e.carbon}</h6>
                        <h6>protein:{e.protein}</h6>
                      </div>
                    </div>

                    <div
                      style={{
                        border: "2px solid black",
                        borderRadius: "50%",
                        padding: "12px",
                      }}
                    >
                      <h2>{e.caloric}</h2>
                    </div>
                  </ItemDiv>
                );
              })
            )}
          </div>
        </LeftDiv>
        <RightAdv>
          <img src={side} alt="" />
          <div style={{ marginTop: "40px" }}>
            <img src={side} alt="" />
          </div>
        </RightAdv>
      </BodyDiv>
    </MainDiv>
  );
}

export default Food
