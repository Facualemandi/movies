import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TMDB from "../../../images/tmbdlogo.svg";

const TheNav = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: #032541;
  position: fixed;
  top: 0px;
  z-index: 3000;
`;
const Conatiner = styled.section`
  display: flex;
  justify-content: center;
  @media (min-width: 780px) {
    height: 100%;
    width: 780px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    height: 100%;
    width: 1080px;
    margin: auto;
  }
  @media (min-width: 1380px) {
    height: 100%;
    width: 1380px;
    margin: auto;
  }
`;
const SectionBurgerBtn = styled.section`
  display: flex;
  justify-content: flex-end;
  width: auto;
  width: 100vw;
  padding: 5px;
  z-index: 5000;
  @media (min-width: 780px) {
    display: none;
  }
`;

const SectionItemsNav = styled.section`
  position: fixed;
  z-index: 2000;
  width: 50vw;
  height: 100vh;
  right: 0px;
  transform: ${({ value }) => (value ? "translateX(0%)" : "translateX(100%)")};
  transition: 0.5s;
  background-color: #032541;
  ul {
    list-style: none;
  }

  @media (min-width: 780px) {
    position: relative;
    transform: none;
    transition: none;
    width: 780px;
    height: auto;
    min-height: 60px;
    ul {
      display: flex;
      width: 500px;
      height: 100%;
      justify-content: space-between;
      align-items: flex-start;
      font-family: "Heebo", sans-serif;
      color: white;
      font-size: 20px;
      width: 300px;
    }
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const ContainerUl = styled.section`
  width: 600px;
  display: flex;
  justify-content: space-between;
  height: 60px;
  max-width: 600px;
  background-color: #032541;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 60px;
    font-family: "Heebo", sans-serif;
  }

  @media (min-width: 780px) {
    display: flex;
    background-color: #032541;
  }
`;

const UlTwoMovie = styled.li`
  list-style: none;
  margin: 5px;

  li {
    margin: 5px;
    margin-left: 20px;
    color: white;
    width: 230px;
  }

  @media (min-width: 780px) {
    display: flex;
    flex-direction: column;
    display: none;
    width: 200px;
    background-color: #032541;
    font-family: "Heebo", sans-serif;
    padding: 5px;
    cursor: pointer;
    li {
      margin-top: 30px;
      color: white;
      list-style: none;
      &:hover {
        color: grey;
        width: 100%;
      }
    }
  }
`;

const UlContainer = styled.p`
  display: flex;
  flex-direction: column;
  width: 100px;
  max-width: 90px;

  p {
    color: white;
    font-family: "Heebo", sans-serif;
    font-size: 19px;
    background-color: #032541;
    width: 100px;
    max-width: 100px;
    margin: 5px;
    margin-left: 15px;
    font-weight: bold;
  }

  &:hover ${UlTwoMovie} {
    color: red;
    display: block;
  }

  @media (min-width: 780px) {
    margin-top: 10px;
    p {
      cursor: pointer;
    }
  }
`;
const NavL = styled(NavLink)`
  text-decoration: none;
`;

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <TheNav>
        <Conatiner>
          <SectionItemsNav value={isOpen}>
            <ContainerUl>
              <UlContainer>
                <p>Peliculas</p>
                <UlTwoMovie>
                  <NavL to={"/total/movie/popular"}>
                    <li>Popular</li>
                  </NavL>
                  <NavL to={"/total/movie/now_playing"}>
                    <li>Transmitiendo ahora</li>
                  </NavL>
                  <NavL to={"/total/movie/upcoming"}>
                    <li>Próximamente</li>
                  </NavL>
                  <NavL to={"/total/movie/top_rated"}>
                    <li>Lo mas valorado</li>
                  </NavL>
                </UlTwoMovie>
              </UlContainer>

              <UlContainer>
                <p>TV Show</p>
                <UlTwoMovie>
                  <NavL to={"/total/tv/popular"}>
                    <li>Popular</li>
                  </NavL>
                  <NavL to={"/total/tv/airing_today"}>
                    <li>Transmitiendo ahora</li>
                  </NavL>
                  <NavL to={"/total/tv/on_the_air"}>
                    <li>On Tv</li>
                  </NavL>
                  <NavL to={"/total/tv/top_rated"}>
                    <li>Lo mas valorado</li>
                  </NavL>
                </UlTwoMovie>
              </UlContainer>

              <UlContainer>
                <p>Personas</p>
                <UlTwoMovie>
                  <NavL to={"/total/person/populr"}>
                    <li>Más populares</li>
                  </NavL>
                </UlTwoMovie>
              </UlContainer>
            </ContainerUl>
          </SectionItemsNav>

          <SectionBurgerBtn>
            <Hamburger
              color="#4FD1C5"
              size={40}
              toggled={isOpen}
              toggle={setOpen}
            />
          </SectionBurgerBtn>
        </Conatiner>
      </TheNav>
    </>
  );
};

export default Nav;
