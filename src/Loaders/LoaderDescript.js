import React from "react";
import styled from "styled-components";
import IMGNF from '../images/ImagenNotFund.jpg'

const DivOne = styled.div`
  width: 100vw;
  height: 250px;
  background-color: grey;
  position: relative;
  background-color: rgba(82, 82, 82, 0.287);
`;

const DivTwo = styled.div`
  width: 200px;
  height: 250px;
  top: 30px;
  left: 30px;
  position: absolute;
  border-radius: 10px;
  background-color: rgba(82, 82, 82, 0.287);
`;

const DivThree = styled.div`
margin-top: 50px;
`;
const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
`


const P1 = styled.p`
  width: 150px;
  height: 15px;
  background-color: grey;
  margin: 5px;
  border-radius: 5px;
  background-color: rgba(82, 82, 82, 0.287);
`;
const P2 = styled.p`
  width: 170px;
  height: 15px;
  background-color: grey;
  margin: 5px;
  border-radius: 5px;
  background-color: rgba(82, 82, 82, 0.287);
`;
const P3 = styled.p`
  width: 90vw;
  height: 150px;
  background-color: grey;
  margin: 5px;
  border-radius: 10px;
  background-color: rgba(82, 82, 82, 0.287);
`;
const P4 = styled.p`
  width: 150px;
  height: 15px;
  background-color: grey;
  margin: 5px;
  border-radius: 5px;
  background-color: rgba(82, 82, 82, 0.287);
`;
const LoaderDescript = () => {
  return (
    <>
      <DivOne>
        <DivTwo>
             <Img alt="" src={IMGNF}/>
        </DivTwo>
      </DivOne>

      <DivThree>
        <P1></P1>
        <P2></P2>
        <P3></P3>
        <P4></P4>
      </DivThree>
    </>
  );
};

export default LoaderDescript;
