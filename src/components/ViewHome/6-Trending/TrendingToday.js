import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Trading from "../../../images/trading.svg";
import { useReactQuery } from "../../../hooks/useReactQuery";
import NotFundImage from "../../../images/ImagenNotFund.jpg";
import LoaderMovies from '../../../Loaders/LoaderMovies';


const SectionMovieCredits = styled.section`
  display: flex;
  overflow-x: auto;
  margin: auto;
  margin-top: 50px;
`;
const Img = styled.img`
  width: 170px;
  height: 230px;
  border-radius: 10px;
  z-index: 200;
  @media (min-width: 1080px) {
    cursor: pointer;
    :hover {
      box-shadow: 0 0 8px 0 rgba(119, 119, 119, 0.987);
      width: 175px;
      height: 235px;
      transition: 0.3s;
    }
  }
`;
const DivMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-width: 170px;
  margin-bottom: 10px;
`;
const NameMovie = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  font-weight: bold;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow-x: auto;
  position: relative;
  margin-top: 180px;
  
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    margin-top: 0 ;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    background-color: white;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(72, 72, 72, 0.213);
    border-radius: 10px;
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      90deg,
      rgba(34, 193, 195, 1) 28%,
      rgba(0, 139, 207, 1) 100%
    );
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;
const ImgTrending = styled.img`
position: absolute;
z-index: auto;
margin-top: 50px;
`
const DataMovie = styled.p`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
`


const TrendingToday = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295"
  const {data, status} = useReactQuery([`${API_URL}`],'trending')


  if (status === "loading") {
    return <LoaderMovies/>;
  }

  return (
    <>
      <Main>
        <SectionMovieCredits>
          {data.results.map((movie) => (
            <NavL key={movie.id} to={`/movie/${movie.id}/${movie.original_title}`}>
              <DivMovie>
                <Img
                  alt={movie.original_title}
                  src={movie.poster_path ? `${URL_IMAGE}${movie.poster_path}` : NotFundImage } />
                <NameMovie>{`${movie.original_title || movie.name}`}</NameMovie>
                <DataMovie>{movie.release_date || movie.first_air_date}</DataMovie>
              </DivMovie>
            </NavL>
          ))}
        </SectionMovieCredits>
        
        
        <ImgTrending alt="" src={Trading}/>
      </Main>
    </>
  );
};

export default TrendingToday;