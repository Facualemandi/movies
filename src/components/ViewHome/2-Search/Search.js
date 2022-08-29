import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Saul from "../../../images/saul.jpg";
import Nav from "../1-Nav/Nav";

const Main = styled.main`
  position: relative;
`;

const Img = styled.img`
  width: 100vw;
  height: 340px;
  z-index: 100;
  display: flex;
  margin: auto;

  @media (max-width: 320px) {
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
  @media (max-width: 380px) {
    font-size: 30px;
  }
  @media (min-width: 1080px) {
    font-size: 55px;
  }
`;
const H3 = styled.h3`
  font-size: 25px;
  margin-top: 10px;

  @media (max-width: 380px) {
    font-size: 22px;
  }

  @media (min-width: 1080px) {
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

const FormSearch = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  border-radius: 30px;
  width: auto;
`;

const ToSearch = styled.p`
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

const NavL = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const Select = styled.select`
  width: 130px;
  height: 40px;
  box-shadow: 0px 0px 3px 0px rgba(119, 119, 119, 0.485);
  border: none;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  border-radius: 50px;
  background-color: red;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 28%,
    rgba(0, 139, 207, 1) 100%
  );
  color: black;
  font-weight: bold;
  margin-left: 15px;
`;
const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 15px;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: bold;
  }

  @media (max-width: 380px) {
    p {
      font-size: 14px;
    }
  }
`;

const Search = () => {
  const [onChangeValue, setOnChangeValue] = useState("");
  const [getSelect, setGetSelect] = useState("movie");

  const changeValue = (e) => {
    setOnChangeValue(e.target.value);
  };

  const navigate = useNavigate();
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      navigate(`/element/${onChangeValue}`);
    }
  };

  const getSelectValue = (e) => {
    setGetSelect(e.target.value);
  };

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

            <ContainerSelect>
              <p>Que querés buscar?</p>
              <Select onChange={getSelectValue} defaultValue="streaming">
                <option value="movie">Peliculas</option>
                <option value="tv">Televisión</option>
                <option value="person">Personas</option>
              </Select>
            </ContainerSelect>

            <FormSearch>
              <Input
                type={"text"}
                placeholder="Ingresa tu pelicula"
                onChange={changeValue}
                value={onChangeValue}
                onKeyDown={keyPressHandler}
              />
              <NavL to={`/movie/${onChangeValue}`}>
                <ToSearch>Search</ToSearch>
              </NavL>
            </FormSearch>
          </SectionWelcome>
        </Container>
      </Main>
    </>
  );
};

export default Search;
