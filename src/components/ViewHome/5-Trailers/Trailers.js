import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { helpHttp } from "../../../Helper/Helphttps";
import TrailersImg from "../../../images/videoImg.jpg";

const Main = styled.main`
  width: 100vw;
  display: flex;
  margin: auto;
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 250px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 270px;
  }
`;

const Img = styled.img`
  width: 100vw;
  height: 200px;
  position: absolute;
  top: 0px;
  z-index: 100;
  margin-top: 15px;
  @media (max-width: 420px) {
    height: 150px;
  }
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 250px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 270px;
  }
`;

const SectionImg = styled.section`
  position: relative;
`;

const DivImg = styled.div`
  position: absolute;
  top: 0px;
  z-index: 1000;
  width: 100vw;
  height: 200px;
  margin-top: 15px;
  background-color: rgba(3, 36, 63, 0.55);
  @media (max-width: 420px) {
    height: 150px;
  }
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    height: 250px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    height: 270px;
  }
`;



const Trailers = () => {

  const API_URL = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=1'

  const getTrailers = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)])
    return response[0].results
  }

  const {data, status} = useQuery(['trailers'], getTrailers);

  if(status === 'loading'){
    return <p>cargando</p>
  }

  return (
    <Main>
     <SectionImg>
        <Img alt="" src={TrailersImg} />
        <DivImg></DivImg>
         {/* {data.map(el =>  <Youtube id={el.id}/>)} */}
      </SectionImg>
   
    </Main>
  );
};

export default Trailers;