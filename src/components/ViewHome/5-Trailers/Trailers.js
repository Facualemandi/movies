import React from "react";
import styled from "styled-components";
import TrailersImg from "../../../images/videoImg.jpg";

const Main = styled.main`
  width: 100vw;
  display: flex;
  margin: auto;
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 250px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 270px;
  }
`;

const Img = styled.img`
  width: 100vw;
  height: 200px;
  position: absolute;
  top: 0px;
  z-index: 400;
  margin-top: 15px;
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 250px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 270px;
  }
`;

const SectionImg = styled.section`
  position: relative;
`;

const DivImg = styled.div`
  position: absolute;
  top: 0px;
  z-index: 1000;
  width: 100vw;
  height: 200px;
  margin-top: 15px;
  background-color: rgba(3, 36, 63, 0.55);
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 250px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 270px;
  }
`;



const Trailers = () => {

  return (
    <Main>
      <SectionImg>
        <Img alt="" src={TrailersImg} />
        <DivImg></DivImg>
      </SectionImg>
    </Main>
  );
};

export default Trailers;