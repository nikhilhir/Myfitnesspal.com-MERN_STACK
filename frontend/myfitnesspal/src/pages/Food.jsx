import { Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import styled from "styled-components";
import side from '../assets/side.png'
import Empty from '../Components/Empty';
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios';

// let dummy = [
//   {
//     id: "28",
//     name: "jabłko ",
//     caloric: "48",
//     type: "f",
//     fat: "0.4",
//     carbon: "12.1",
//     protein: "0.4",
//     category_id: "1",
//   },
//   {
//     id: "15395",
//     name: "Jabłko Sok",
//     caloric: "45",
//     type: "x",
//     fat: "0",
//     carbon: "11",
//     protein: "0",
//     category_id: "500",
//   },
//   {
//     id: "441",
//     name: "jabłko mus ",
//     caloric: "120",
//     type: "f",
//     fat: "1",
//     carbon: "25.7",
//     protein: "2.5",
//     category_id: "1",
//   },
//   {
//     id: "6523",
//     name: "Jabłko 100g",
//     caloric: "50",
//     type: "x",
//     fat: "0",
//     carbon: "11",
//     protein: "0",
//     category_id: "500",
//   },
//   {
//     id: "1409",
//     name: "sok jabłkowy",
//     caloric: "47",
//     type: "f",
//     fat: "0.1",
//     carbon: "11.7",
//     protein: "0.1",
//     category_id: "6",
//   },
//   {
//     id: "7086",
//     name: "Jabłko Arbuz",
//     caloric: "38",
//     type: "x",
//     fat: "0",
//     carbon: "10",
//     protein: "0",
//     category_id: "500",
//   },
//   {
//     id: "6882",
//     name: "Chrup Jabłko",
//     caloric: "364",
//     type: "x",
//     fat: "0",
//     carbon: "812",
//     protein: "2",
//     category_id: "500",
//   },
//   {
//     id: "2098",
//     name: "sos jabłkowy ",
//     caloric: "53",
//     type: "s",
//     fat: "2.4",
//     carbon: "8.3",
//     protein: "0.6",
//     category_id: "12",
//   },
//   {
//     id: "2172",
//     name: "Ocet jabłkowy",
//     caloric: "16",
//     type: "s",
//     fat: "0",
//     carbon: "0.6",
//     protein: "0.4",
//     category_id: "12",
//   },
//   {
//     id: "15741",
//     name: "Jabłko-mięta",
//     caloric: "38",
//     type: "x",
//     fat: "0",
//     carbon: "9",
//     protein: "0",
//     category_id: "500",
//   },
//   {
//     id: "321",
//     name: "jabłko suszone",
//     caloric: "255",
//     type: "f",
//     fat: "2.1",
//     carbon: "62.3",
//     protein: "2.1",
//     category_id: "1",
//   },
//   {
//     id: "2459",
//     name: "zupa jabłkowa ",
//     caloric: "32",
//     type: "m",
//     fat: "0.2",
//     carbon: "7.9",
//     protein: "0.3",
//     category_id: "14",
//   },
//   {
//     id: "10289",
//     name: "Jabłko  agrest",
//     caloric: "37",
//     type: "x",
//     fat: "0",
//     carbon: "9",
//     protein: "0",
//     category_id: "500",
//   },
//   {
//     id: "14416",
//     name: "Zielone Jabłko",
//     caloric: "46",
//     type: "x",
//     fat: "0",
//     carbon: "12",
//     protein: "0",
//     category_id: "500",
//   },
//   {
//     id: "29",
//     name: "jabłko gotowane",
//     caloric: "45",
//     type: "f",
//     fat: "0.5",
//     carbon: "11.1",
//     protein: "0.7",
//     category_id: "1",
//   },
// ];

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
                        padding: "10px",
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
