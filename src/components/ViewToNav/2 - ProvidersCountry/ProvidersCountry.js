import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { useTheContext } from "../../../context/context";
import { helpHttp } from "../../../Helper/Helphttps";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 5px;
  box-shadow: 0 0 5px 0 rgba(128, 128, 128, 0.485);
`;
const SectionImg = styled.section`
  width: 95vw;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: auto;
  height: 180px auto;
  overflow-y: auto;

  @media (max-width: 380px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 380px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 420px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const NoProviders = styled.p`
width: max-content;
height: auto;
`
const ProvidersCountry = () => {
  const { valueSelect } = useTheContext();
  console.log(valueSelect);
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/watch/providers/movie?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&watch_region=${valueSelect}`;
  const getProvidersCountry = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0].results;
  };

  const { data, status } = useQuery([`${valueSelect}`], getProvidersCountry);

  if (status === "loading") {
    return <p>Carganado..</p>;
  }

  return (
    <>
      <SectionImg>
        {data.length === 0 ? (
          <NoProviders>Este país  no contiene providers.</NoProviders>
        ) : (
          data.map((prov) => (
            <Img
              key={prov.provider_id}
              alt=""
              src={`${URL_IMG}${prov.logo_path}`}
            />
          ))
        )}
      </SectionImg>
    </>
  );
};

export default ProvidersCountry;
