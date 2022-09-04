import React from "react";
import styled from "styled-components";
import IMGNF from "../images/ImagenNotFund.jpg";
import { BsFillImageFill } from "react-icons/bs";

const Main = styled.main`
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
    flex-direction: column;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const DivOne = styled.div`
  width: 100vw;
  height: 250px;
  background-color: grey;
  position: relative;
  background-color: rgba(82, 82, 82, 0.287);

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
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
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const P1 = styled.p`
  width: 150px;
  height: 15px;
  background-color: grey;
  margin: 5px;
  border-radius: 5px;
  background-color: rgba(82, 82, 82, 0.287);
  margin-top: 50px;
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

  @media (min-width: 780px) {
    width: 780px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const P4 = styled.p`
  width: 150px;
  height: 15px;
  background-color: grey;
  margin: 5px;
  border-radius: 5px;
  background-color: rgba(82, 82, 82, 0.287);
`;
const Section = styled.div`
  height: 230px;
  border-radius: 10px;
  width: 160px;
  background-color: rgba(215, 215, 215, 0.296);
  box-shadow: 0px 0px 5px 0px rgba(141, 141, 141, 0.493);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  display: flex;
  margin: 5px;
`;

const Parragraph = styled.p`
  width: 100px;
  height: 15px;
  background-color: black;
  margin-top: 15px;
  background-color: rgba(215, 215, 215, 0.296);
`;

const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  overflow-x: auto;
`;

const Data = styled.p`
  width: 70px;
  height: 15px;
  background-color: black;
  margin-top: 10px;
  background-color: rgba(215, 215, 215, 0.296);
`;
const IconImg = styled(BsFillImageFill)`
  width: 100px;
  height: 100px;
  color: rgba(184, 184, 184, 0.83);
`;

const SectionAll = styled.section`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const LoaderDescript = () => {
  return (
    <>
      <Main>
        <DivOne>
          <DivTwo>
            <Img alt="" src={IMGNF} />
          </DivTwo>
        </DivOne>

        <DivThree>
          <P1></P1>
          <P2></P2>
          <P3></P3>
          <P4></P4>
        </DivThree>

        <SectionAll>
          <Container>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
            <ContainerSection>
              <Section>
                <IconImg />
              </Section>
              <Parragraph></Parragraph>
              <Data></Data>
            </ContainerSection>
          </Container>
        </SectionAll>
      </Main>
    </>
  );
};

export default LoaderDescript;
