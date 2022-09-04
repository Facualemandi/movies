import React from "react";
import styled from "styled-components";
import IMG from "../images/ImagenNotFund.jpg";

const Img = styled.img`
  width: 350px;
  height: 450px;
  margin: 15px;
  border-radius: 30px;
`;
const DivC = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  div {
    margin: 10px;
    background-color: rgba(215, 215, 215, 0.526);
    margin: 15px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

const Info = styled.p`
  width: 350px;
  height: 30px;
  background-color: rgba(215, 215, 215, 0.526);
  margin: 15px;
`;
const P1 = styled.p`
  width: 250px;
  height: 30px;
  background-color: rgba(215, 215, 215, 0.526);
  margin: 15px;
  margin-top: 50px;
  border-radius: 3px;
`;
const P2 = styled.p`
  width: 200px;
  background-color: rgba(215, 215, 215, 0.526);
  height: 25px;
  margin: 15px;
  border-radius: 3px;
`;

const LoaderPerson = () => {
  return (
    <div>
      <Img alt="" src={IMG} />

      <DivC>
        <div></div>
        <div></div>
        <div></div>
      </DivC>

      <Info></Info>
      <P1></P1>
      <P2></P2>
      <P1></P1>
      <P2></P2>
      <P1></P1>
      <P2></P2>
      <P1></P1>
      <P2></P2>
    </div>
  );
};

export default LoaderPerson;
