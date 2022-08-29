import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../hooks/useReactQuery";
import ImageNFound from "../../images/ImagenNotFund.jpg";


const ContainerAll = styled.main`
 margin: 10px;
 padding: 10px;
`
const ContainerMovie = styled.section`
 display: flex;
`
const Img = styled.img`
width: 100px;
height: 130px;
border-radius: 10px;
`
const Name = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 16px;
font-weight: bold;
margin: 10px;
`
const ContainerP = styled.section`
display: flex;
`
const ContainerPerson = styled.section`
display: flex;
flex-direction: column;
`
const SectionPerson = styled.section`
font-family: 'Roboto', sans-serif;
font-size: 16px;
margin: 10px;
`
const OverViewMovie = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 14px;
margin: 10px;
max-height: 90px;
overflow-y: auto;

`
const MovieSearch = () => {
  const { movie, toSearch } = useParams();

  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/search/multi?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&query=${toSearch}`;

  const { data, status } = useReactQuery(`${API_URL}`, `${movie}`);

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }

  return (
    <>
      {data.results.map((el) => (
        <ContainerAll key={el.id}>
         {el.media_type === 'person' && 

         <ContainerP>
            <Img alt={el.name} src={`${!el.profile_path ? ImageNFound : `${URL_IMG}${el.profile_path}` }`}/>
            <ContainerPerson>
              <Name>{el.name}</Name>

               <SectionPerson>
                  <p>{el.known_for_department}</p>
                  <p>{el.known_for.map(el => el.original_title || el.name).join(', ')}</p>
                </SectionPerson>
            </ContainerPerson>
          </ContainerP>
          }
     

       
         {el.media_type === 'movie' && 
         <ContainerMovie>
            <Img alt={el.name} src={`${!el.poster_path ? ImageNFound : `${URL_IMG}${el.poster_path}` }`}/>
            <section>
             <Name>{el.title}</Name>
             <OverViewMovie>{el.overview}</OverViewMovie>
            </section>
          </ContainerMovie>}
        </ContainerAll>
      ))}
    </>
  );
};

export default MovieSearch;
