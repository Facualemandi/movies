import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TMDB from "../../../images/tmbdlogo.svg";

const Navegation = styled.nav`
  height: auto;
  background-color: #032541;
  width: 100vw;
  position: fixed;
  z-index: 2000;
  top: 0px;
`;
const Logo = styled.img`
  width: 200px;
  height: 60px;
  margin: 5px 30px;
`;

const SectionOne = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media (min-width: 780px) {
    width: 780px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const DivBurger = styled.div`
  margin: 10px;
  z-index: 500;
  position: fixed;
  right: 10px;
  @media (min-width: 780px) {
    display: none;
  }
`;

const Ul = styled.ul`
  li {
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
    margin: 10px;
    margin-left: 30px;
    margin-top: 20px;
    color: white;
    text-decoration: none;
    list-style: none;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

const SectionItemsNav = styled.section`
  display: flex;
  margin: 10px;
  z-index: 2500;
  height: 100vh;

  p {
    margin-left: 20px;
    margin-bottom: 5px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: white;
  }

  @media (min-width: 780px) {
    max-height: 60px;
    justify-content: center;
    align-items: center;
    p {
      margin-left: 50px;
    }
  }

  @media (max-width: 780px) {
    margin: 0;
    position: fixed;
    flex-direction: column;
    transition: 0.5s;
    background-color: red;
    transform: ${({ value }) =>
      value ? "translateX(40%)" : "translateX(100%)"};
    width: 100vw;
    background-color: #0b1b29;
    z-index: 300;
  }
`;
const DivOne = styled.div`
  @media (max-width: 780px) {
    margin-top: 30px;
  }
  @media (min-width: 780px) {
    display: flex;
    margin: 15px;
  }
`;

const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navegation>
      <SectionOne>
        <Logo alt="" src={TMDB} />

        <SectionItemsNav value={isOpen}>
          <DivOne>
            <p>Peliculas</p>

            <Ul>
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
            </Ul>

            <p>TV show</p>
            <Ul>
              <NavL to={"/total/tv/popular"}>
                <li>Tv popular</li>
              </NavL>
              <NavL to={"/total/tv/now_playing"}>
                <li>Transmitiendo ahora</li>
              </NavL>
              <NavL to={"/total/tv/on_the_air"}>
                <li>On Tv</li>
              </NavL>
              <NavL to={"/total/tv/top_rated"}>
                <li>Lo mas valorado</li>
              </NavL>
            </Ul>

            <p>Personas</p>
            <Ul>
              <NavL to={"/total/person/popular"}>
                <li>Personas populares</li>
              </NavL>
            </Ul>
          </DivOne>
        </SectionItemsNav>

        <DivBurger>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#4FD1C5"
            size={50}
          />
        </DivBurger>
      </SectionOne>
    </Navegation>
  );
};

export default Nav;
