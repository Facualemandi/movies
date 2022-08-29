import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../../hooks/useReactQuery";
import NotFundImage from "../../../images/ImagenNotFund.jpg";

const SectionMovieCredits = styled.section`
  display: flex;
  overflow-x: auto;
  margin: auto;


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
const Img = styled.img`
  width: 170px;
  height: 230px;
  border-radius: 10px;

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
const NameMovie = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: 5px;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 10px;
  max-width: 172px;
  max-height: 332px;
  border: 1px solid white;
`;
const Data = styled.p`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  margin-top: 5px;
`
const Main = styled.main`
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
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
const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  margin: 15px;
`;


const Recomendations = () => {
  const { id, watch } = useParams();
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/${watch}/${id}/recommendations?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=1`;
  const { data, status } = useReactQuery(`${API_URL}`, "recomendations");

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }
  const newData = data.results.slice(0, 15);

  return (
    <>
      <Main>
        <H3>Recomendations</H3>
        <SectionMovieCredits>
          {newData.map((el) => (
            <NavL key={el.id} to={`/${watch}/${el.id}/${el.title}`}>
              <Img
                  alt={el.original_title}
                  src={
                    el.poster_path
                      ? `${URL_IMAGE}${el.poster_path}`
                      : NotFundImage
                  }
                />
              <NameMovie>{el.title}</NameMovie>
              <Data>{el.release_date}</Data>
            </NavL>
          ))}
        </SectionMovieCredits>
      </Main>
    </>
  );
};

export default Recomendations;