import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../../components/1-Nav/Nav";
import Search from "../../components/2-Search/Search";
import PopularMovies from "../../components/3-PopularMovies/PopularMovies";
import PopularTv from "../../components/3-PopularMovies/PopularTv";
import CoomingSoon from "../../components/4-CoomingSoon/CoomingSoon";
import Trailers from "../../components/5-Trailers/Trailers";
import TrendingToday from "../../components/6-Trending/TrendingToday";
import Footer from "../../components/7-Footer/Footer";

const MorePopular = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  margin: 10px;

`;

const SectionPopular = styled.section`
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 15px;
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Select = styled.select`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(119, 119, 119, 0.485);
  border: none;
  background-color: white;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

const Home = () => {
  const [valueSelect, setValueSelect] = useState("streaming");

  const onChangeValue = (e) => {
    setValueSelect(e.target.value);
  };

  return (
    <>
      <Nav />
      <Search />

      <SectionPopular>
        <MorePopular>Mas popular</MorePopular>
        <Select onChange={onChangeValue} defaultValue="streaming">
          <option value="streaming">Streaming</option>
          <option value="tv">On TV</option>
        </Select>
      </SectionPopular>

      {valueSelect === "streaming" && <PopularMovies />}
      {valueSelect === "tv" && <PopularTv />}
      <CoomingSoon/>
      <Trailers/>
      <TrendingToday/>
      <Footer/>
    </>
  );
};

export default Home;
