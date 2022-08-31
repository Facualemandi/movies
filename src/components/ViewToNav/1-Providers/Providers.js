import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { helpHttp } from "../../../Helper/Helphttps";


const SectionSelect = styled.select`
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(128, 128, 128, 0.285);
  font-family: "Heebo", sans-serif;
  font-size: 16px;
  border: none;
  margin: 0 0 10px 10px;
`
const Providers = () => {
  const API_URL = `https://api.themoviedb.org/3/configuration/countries?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;

  const getProviders = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0];
  };

  const {data, status} = useQuery(['Providers'], getProviders);

  if(status === 'loading'){
    return <p>Cargando...</p>
  }else{
    console.log(data)
  }

  return (
    <>
      <SectionSelect defaultValue="Argentina">
          {data.map(op => (
             <option key={op.iso_3166_1} value={op.native_name}>{op.native_name}</option>
          ))}
      </SectionSelect>
    </>
  );
};

export default Providers;
