import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../hooks/useReactQuery";
import ImageNFound from "../../images/ImagenNotFund.jpg";


const ContainerMovie = styled.section`
  display: flex;
  box-shadow: 0 0 5px 0 rgba(147, 147, 147, 0.793);
  border-radius: 15px;
  margin: 10px;
`;
const Img = styled.img`
  width: 70px;
  height: 100px;
  border-radius: 10px;
  min-width: 100px;
  margin: 5px;
`;
const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
`;
const ContainerP = styled.section`
  display: flex;
  margin: 10px;
  box-shadow: 0 0 5px 0 rgba(147, 147, 147, 0.793);
  border-radius: 15px;
`;
const SecPerson = styled.section`
  display: flex;
  flex-direction: column;
`;
const SectionPerson = styled.section`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 10px;
`;
const OverViewMovie = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin: 10px;
  max-height: 90px;
  overflow-y: auto;
`;
const MovieSearch = () => {
  const { movie, toSearch } = useParams();
  const [theMovies, setTheMovies] = useState(true);
  const [thePerson, setThePerson] = useState(false)
  const [theTv, setTheTv] = useState(false)

  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/search/multi?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&query=${toSearch}`;

  const { data, status } = useReactQuery(`${API_URL}`, `${movie}`);

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }

  const movies = data.results.filter((el) => el.media_type === "movie");
  const person = data.results.filter((el) => el.media_type === "person");
  const tv = data.results.filter((el) => el.media_type === "tv");
  console.log(tv);

  return (
    <>
      <main>
          {person.map((person) => (
            <ContainerP>
              <Img
                alt={person.name}
                src={`${ !person.profile_path ? ImageNFound : `${URL_IMG}${person.profile_path}` }`} />
              <SecPerson>
                <Name>{person.name}</Name>

                <SectionPerson>
                  <p>{person.known_for_department}</p>
                  <p>{person.known_for.map((el) => el.original_title || el.name).join(", ")}</p>
                </SectionPerson>
              </SecPerson>
            </ContainerP>
          ))}
    

        {movies.map((movie) => (
          <ContainerMovie>
            <Img
              alt={movie.name}
              src={`${ !movie.poster_path ? ImageNFound : `${URL_IMG}${movie.poster_path}` }`} />
            <section>
              <Name>{movie.title}</Name>
              <OverViewMovie>{movie.overview}</OverViewMovie>
            </section>
          </ContainerMovie>
        ))}

      
        {tv.map((movie) => (
          <ContainerMovie>
            <Img
              alt={movie.name}
              src={`${ !movie.poster_path ? ImageNFound : `${URL_IMG}${movie.poster_path}` }`} />
            <section>
              <Name>{movie.title || 'No have'}</Name>
              <OverViewMovie>{movie.overview || 'No Have'}</OverViewMovie>
            </section>
          </ContainerMovie>

        ))}


      </main>
    </>
  );
};

export default MovieSearch;
