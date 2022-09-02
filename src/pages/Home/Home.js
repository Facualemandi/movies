import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../../components/ViewHome/1-Nav/Nav";
import Search from "../../components/ViewHome/2-Search/Search";
import PopularMovies from "../../components/ViewHome/3-PopularMovies/PopularMovies";
import PopularTv from "../../components/ViewHome/3-PopularMovies/PopularTv";
import CoomingSoon from "../../components/ViewHome/4-CoomingSoon/CoomingSoon";
import Trailers from "../../components/ViewHome/5-Trailers/Trailers";
import Footer from "../../components/ViewHome/7-Footer/Footer";
import TrendingToday from "../../components/ViewHome/6-Trending/TrendingToday";

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
  border-radius: 50px;
  background-color: red;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 28%,
    rgba(0, 139, 207, 1) 100%
  );
  color: black;
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
      <CoomingSoon />
      <Trailers />
      <TrendingToday />
      <Footer />
    </>
  );
};

export default Home;
