import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../../Helper/Helphttps";
import ImageNFound from "../../images/ImagenNotFund.jpg";
import LoaderPopular from "../../Loaders/LoaderPopular";
import NoResults from "../../images/noResults.png";

const ContainerAll = styled.section`
  width: 100vw;
  margin: auto;

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
  margin: 10px;
`;
const NavL = styled(NavLink)`
  display: flex;
  margin: 10px;
  box-shadow: 0 0 5px 0 rgba(147, 147, 147, 0.793);
  border-radius: 15px;
  text-decoration: none;
  color: black;
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
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 10px;
  max-height: 70px;
  overflow-y: auto;
`;
const Parraagraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin: 10px;
`;
const ImgNoResults = styled.img`
  width: 60vw;
  height: 250px;
  display: flex;
  margin: auto;
  margin-top: 30px;
`;
const SecondNav = styled(NavLink)`
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: center;
  background-color: #1f4c71;
  color: white;
  font-family: "Roboto", sans-serif;
  width: 100%;
  text-decoration: none;

  p {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const PNotFund = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 400;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const MovieSearch = () => {
  const { toSearch } = useParams();
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/search/multi?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&query=${toSearch}`;

  const getSearch = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0].results;
  };
  const { data, status } = useQuery([`${toSearch}`], getSearch);

  if (status === "loading") {
    return <LoaderPopular />;
  }

  const movies = data.filter((el) => el.media_type === "movie");
  const person = data.filter((el) => el.media_type === "person");
  const tv = data.filter((el) => el.media_type === "tv");

  return (
    <>
      <main>
        <SecondNav to={"/"}>
          <p>Volver</p>
        </SecondNav>

        <ContainerAll>
          <Parraagraph>{person.length === 0 ? "" : "Personas"}</Parraagraph>
          {person.map((person) => (
            <NavL key={person.id} to={`/person/${person.id}/${person.name}`}>
              <Img
                alt={person.name}
                src={`${
                  !person.profile_path
                    ? ImageNFound
                    : `${URL_IMG}${person.profile_path}`
                }`}
              />
              <SecPerson>
                <Name>{person.name}</Name>

                <SectionPerson>
                  <p>{person.known_for_department}</p>
                  <p>
                    {person.known_for
                      .map((el) => el.original_title || el.name)
                      .join(", ")}
                  </p>
                </SectionPerson>
              </SecPerson>
            </NavL>
          ))}

          <Parraagraph>{movies.length === 0 ? "" : "Peliculas"}</Parraagraph>
          {movies.map((movie) => (
            <NavL key={movie.id} to={`/movie/${movie.id}/${movie.name}`}>
              <Img
                alt={movie.name}
                src={`${
                  !movie.poster_path
                    ? ImageNFound
                    : `${URL_IMG}${movie.poster_path}`
                }`}
              />
              <section>
                <Name>{movie.title}</Name>
                <OverViewMovie>{movie.overview}</OverViewMovie>
              </section>
            </NavL>
          ))}

          <Parraagraph>{tv.length === 0 ? "" : "TV Shows"}</Parraagraph>
          {tv.map((movie) => (
            <NavL key={movie.id} to={`/tv/${movie.id}/${movie.name}`}>
              <Img
                alt={movie.name}
                src={`${
                  !movie.poster_path
                    ? ImageNFound
                    : `${URL_IMG}${movie.poster_path}`
                }`}
              />
              <section>
                <Name>{movie.name || "No have"}</Name>
                <OverViewMovie>{movie.overview || "No Have"}</OverViewMovie>
              </section>
            </NavL>
          ))}
        </ContainerAll>
        {person.length === 0 && movies.length === 0 && tv.length === 0 ? (
          <section>
            <ImgNoResults alt="" src={NoResults} />
            <PNotFund>No encontramos lo que busc??s.</PNotFund>
          </section>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default MovieSearch;
