import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../../hooks/useReactQuery";
import NotFundImage from '../../../images/ImagenNotFund.jpg'


const SectionMovieCredits = styled.section`
  display: flex;
  overflow-x: auto;
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
      background: linear-gradient(90deg, rgba(34, 193, 195, 1) 28%, rgba(0, 139, 207, 1) 100% );
      border-radius: 10px;
      margin-bottom: 15px;
    }
`;

const Img = styled.img`
width: 170px;
height: 230px;
border-radius: 10px;
@media (min-width: 1080px){
    cursor: pointer;
    :hover{
      box-shadow: 0 0 8px 0 rgba(119, 119, 119, 0.987);
      width: 175px;
      height: 235px;
      transition: 0.3s;
    }
  }
`

const DivMovie = styled.div`
 display: flex;
 flex-direction: column;
 margin: 10px;
 max-width: 170px;
 margin-bottom: 10px;
`
const NameMovie = styled.p`
 font-size: 18px;
 font-family: 'Roboto', sans-serif;
 margin-top: 10px;
`
const NavL = styled(NavLink)`
 text-decoration: none;
 color: black;
`

const H3 = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 28px;
margin: 10px;
`
const MovieCredits = () => {
  const { id } = useParams();
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const API_URL = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;

  const { data, status } = useReactQuery(`${API_URL}`, id);

  if (status === "loading") {
    return <p>Cargando</p>;
  }

  const newData = data.cast.slice(0, 15)

  return (
    <>
      <main>
        <H3>Known For </H3>
        <SectionMovieCredits>
          {newData.map((movie) => (
            <NavL key={movie.id} to={`/movie/${movie.id}`}>
             <DivMovie>
               <Img alt={movie.original_title} src={movie.poster_path ? `${URL_IMAGE}${movie.poster_path}` : NotFundImage} />
               <NameMovie>{movie.original_title}</NameMovie>
             </DivMovie>
            </NavL>
          ))}
        </SectionMovieCredits>
       </main>
    </>
  );
};

export default MovieCredits;