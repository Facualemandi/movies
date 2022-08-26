import React from "react";
import styled from "styled-components";
import { BsFillImageFill } from "react-icons/bs";

const Main = styled.main`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(72, 72, 72, 0.213);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #0303032a;
      border-radius: 10px;
    }
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
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

const LoaderMovies = () => {
  return (
    <>
      <Main>
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
      </Main>
    </>
  );
};

export default LoaderMovies;