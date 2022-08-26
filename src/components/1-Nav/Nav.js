import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styled from "styled-components";
import TMDB from "../../images/tmbdlogo.svg";

const Navegation = styled.nav`
  height: auto;
  background-color: #032541;
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
  @media (min-width: 780px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  margin: 10px;
  z-index: 2500;

  @media (max-width: 780px) {
    margin: 0;
    position: fixed;
    flex-direction: column;
    transition: 0.5s;
    background-color: red;
    transform: ${({ value }) =>
      value ? "translateX(30%)" : "translateX(100%)"};
    width: 100vw;
    background-color: #0b1b29;
    z-index: 300;
  }
`;

const Li = styled.li`
  margin: 15px 50px;
  list-style: none;
  color: white;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 780px) {
    margin: 15px;
    padding: 15px;
  }
`;

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navegation>
      <SectionOne>
        <Logo alt="" src={TMDB} />

        <Ul value={isOpen}>
          <Li>Peliculas</Li>
          <Li>TV show</Li>
          <Li>People</Li>
        </Ul>

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