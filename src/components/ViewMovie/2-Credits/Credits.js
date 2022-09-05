import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../../../Helper/Helphttps";

const Job = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 400px) {
    font-size: 14px;
  }
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
  let key = `credits ${id}`;
  const { data, status } = useQuery([`${key}`], getCredits);

  if (status === "loading") {
    return;
  }

  const director = data.crew.filter(
    (el) => el.known_for_department === "Directing"
  );
  const screen = data.crew.filter(
    (el) => el.known_for_department === "Production"
  );

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
      </Main>
    </>
  );
};

export default Credits;
