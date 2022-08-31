import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../../../Helper/Helphttps";
import { useReactQuery } from "../../../hooks/useReactQuery";

const Job = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px;
  @media (min-width: 1080px) {
    position: absolute;
    top: 270px;
    left: 390px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
  }
  section {
    margin: 10px;
  }
`;

const Credits = () => {
  const { id, watch } = useParams();
  const API_KEY = `https://api.themoviedb.org/3/${watch}/${id}/credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;

  const getCredits = async () => {
    const response = await Promise.all([helpHttp().get(API_KEY)]);
    return response[0];
  };
  const { data, status } = useQuery(["credits"], getCredits);

  if (status === "loading") {
    return <p>Cargando</p>;
  } 

  const director = data.crew.filter((el) => el.job === "Director");
  const screen = data.crew.filter((el) => el.job === "Screenplay");
  const characters = data.crew.filter((el) => el.job === "Characters");

  return (
    <>
      <Main>
        {director.map((dir) => (
          <section key={dir.id}>
            <Name>{dir.name}</Name>
            <Job>{dir.job}</Job>
          </section>
        ))}

        {screen.map((scr) => (
          <section key={scr.id}>
            <Name>{scr.name}</Name>
            <Job>{scr.job}</Job>
          </section>
        ))}

        {characters.map((char) => (
          <section key={char.id}>
            <Name>{char.name}</Name>
            <Job>{char.job}</Job>
          </section>
        ))}
      </Main>
    </>
  );
};

export default Credits;
