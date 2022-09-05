import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useReactQuery } from "../../hooks/useReactQuery";
import MovieCredits from "../../components/ViewPerson/2-MovieCredits/MovieCredits";
import MoviesPerson from "../../components/ViewPerson/3-MoviePerson/MoviePerson";
import Footer from "../../components/ViewHome/7-Footer/Footer";
import LoaderPerson from "../../Loaders/LoaderPerson";
import { helpHttp } from "../../Helper/Helphttps";
import { useQuery } from "@tanstack/react-query";

const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1380px) {
    width: 1380px;
    display: flex;
    flex-direction: row;
  }
`;
const Img = styled.img`
  width: 350px;
  height: 450px;
  border-radius: 10px;
  display: flex;
  margin: 10px;

  @media (max-width: 390px) {
    width: 95vw;
  }
  @media (max-width: 360px) {
    margin: auto;
  }
`;

const Key = styled.p`
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
`;
const Value = styled.p`
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;

const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  margin: 5px;
  margin-bottom: 20px;
`;
const H3 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  margin: 10px;
  margin-bottom: 15px;
`;

const ContainerPerson = styled.section`
  display: flex;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

const SectionPictureRedes = styled.section`
  display: flex;
  flex-direction: column;
`;

const Facebook = styled(FaFacebookSquare)`
  margin: 15px;
  width: 35px;
  height: 35px;
`;
const Twitter = styled(FaTwitterSquare)`
  margin: 15px;
  width: 35px;
  height: 35px;
`;
const Instagram = styled(FaInstagramSquare)`
  margin: 15px;
  width: 35px;
  height: 35px;
`;
const Biography = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 5px;
`;

const DivConatainer = styled.div`
  overflow-x: auto;
  margin: 10px;
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


const Person = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const { id, name } = useParams();
  const API_URL = `https://api.themoviedb.org/3/person/${id}?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;

  const getPopularPeople = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0]
  }
  
  const { data, status } = useQuery([`${name}`], getPopularPeople);

  if (status === "loading") {
    return <LoaderPerson/>;
  }

  return (
    <>
      <SecondNav to={"/"}>
        <p>Volver</p>
      </SecondNav>
      

      <Main>
        <ContainerPerson>
          <SectionPictureRedes>
            <Img alt={data.name} src={`${URL_IMAGE}${data.profile_path}`} />
            <div>
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
            <div>
              <H3>Personal Info</H3>
              <Key>Know For</Key>
              <Value>{data.known_for_department}</Value>
              <Key>Gender</Key>
              <Value>{data.gender === 1 ? "Female" : "Male"}</Value>
              <Key>Birthday</Key>
              <Value>{data.birthday}</Value>
              <Key>Place of Birth</Key>
              <Value>{data.place_of_birth}</Value>
              <Key>Also known as</Key>
              <Value>{data.also_known_as}</Value>
            </div>
          </SectionPictureRedes>
        </ContainerPerson>

        <DivConatainer>
          <H2>{data.name}</H2>
          <Biography>{data.biography}</Biography>
          <MovieCredits />
          <MoviesPerson />
        </DivConatainer>
      </Main>
      
      <Footer />
      
    </>
  );
};

export default Person;
