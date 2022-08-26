import React from "react";
import styled from "styled-components";
import Saul from "../../images/saul.jpg";

const Main = styled.main`
  position: relative;
`;

const Img = styled.img`
  width: 100vw;
  height: 300px;
  z-index: 100;
  display: flex;
  margin: auto;

  @media (max-width: 320px){
    height: 340px;
  }
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 350px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 400px;
  }
`;

const H2 = styled.h2`
  font-size: 35px;
  @media (min-width: 1080px){
    font-size: 55px;
  }
`;
const H3 = styled.h3`
  font-size: 25px;
  margin-top: 10px;

  @media (min-width: 1080px){
    font-size: 35px;
  }
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 30px;
  border: none;
  width: 80%;
  outline: none;
`;

const SectionWelcome = styled.section`
  position: absolute;
  top: 10px;
  font-family: "Roboto", sans-serif;
  padding: 15px;
  color: white;
  z-index: 150;

  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    top: 10%;
}
@media (min-width: 1380px) {
    width: 1380px;
    top: 20%;
  }
`;

const SentionSearch = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  margin-top: 30px;
  border-radius: 30px;
  width: auto;
`;

const ToSearch = styled.p`
  width: 20%;
  min-width: 100px;
  padding: 15px;
  border-radius: 35px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 28%,
    rgba(0, 139, 207, 1) 100%
  );
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.section`
  position: relative;

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



const Search = () => {
  return (
    <>
      <Main>
        <Container>
          <Img alt="" src={Saul} />

          <SectionWelcome>
            <H2>Bienvenido</H2>

            <H3>
              Millones de películas, programas de televisión y personas por
              descubrir. Explora ahora.
            </H3>

            <SentionSearch>
              <Input type={"text"} />
              <ToSearch>Search</ToSearch>
            </SentionSearch>
          </SectionWelcome>
        </Container>
      </Main>
    </>
  );
};

export default Search;