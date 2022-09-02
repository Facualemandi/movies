import React from "react";
import styled from "styled-components";
import IMGNF from "../images/ImagenNotFund.jpg";

const Div = styled.div`
  width: 95vw;
  height: 100px;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  background-color: rgba(154, 154, 154, 0.287);
`;
const Img = styled.img`
  height: 100%;
  width: 80px;
  border-radius: 10px;
  padding: 5px;
`;

const LoaderPopular = () => {
  return (
    <>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
      <Div>
        <Img alt="" src={IMGNF} />
      </Div>
    </>
  );
};

export default LoaderPopular;
