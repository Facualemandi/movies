import React from "react";
import styled from "styled-components";
import IMGNF from "../images/ImagenNotFund.jpg";

const Div = styled.div`
  width: 100%;
  height: 100px;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  background-color: rgba(215, 215, 215, 0.526);
`;
const Img = styled.img`
  height: 100%;
  width: 80px;
  border-radius: 10px;
  padding: 5px;
`;
const Section = styled.section`
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const LoaderPopular = () => {
  return (
    <>
      <Section>
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
      </Section>
    </>
  );
};

export default LoaderPopular;
