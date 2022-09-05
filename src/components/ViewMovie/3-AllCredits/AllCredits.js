import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../../../Helper/Helphttps";
import NotFound from "../../../images/ImagenNotFund.jpg";

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-width: 200px;
`;

const Main = styled.main`
  section {
    overflow-x: auto;
    display: flex;
    div {
      width: max-content;
      margin: 10px;
      border-radius: 15px;
      box-shadow: 0 0 5px 0 rgba(64, 64, 64, 0.781);
      min-width: 200px;
      max-width: 250px;
      height: auto;
      min-height: 280px;
    }
  }
`;

const NameActor = styled.p`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  margin: 3px;
  font-weight: bold;
  width: max-content;
`;
const Character = styled.p`
  margin: 5px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  width: auto;
  max-width: 180px;
`;

const TopCast = styled.h3`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  margin: 15px 0 15px 15px;
`;

const ContainerAllCredits = styled.section`
  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    background-color: white;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      90deg,
      rgba(34, 193, 195, 1) 28%,
      rgba(0, 139, 207, 1) 100%
    );
    border-radius: 10px;
  }
`;

const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const AllCredits = () => {
  const { id, watch } = useParams();
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/${watch}/${id}/credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;
  
  const getAllCredits = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0]
}
 const { data , status } = useQuery([`allCredits`], getAllCredits);

  if (status === "loading") {
    return ;
  }
  const newData = data.cast.slice(0, 20);


  return (
    <>
      <Main>
        <TopCast>Top Billed Cast</TopCast>
        <ContainerAllCredits>
          {newData.map((el) => (
            <NavL key={el.id} to={`/person/${el.id}/${el.name}`}>
              <div>
                <Img
                  alt={el.original_name}
                  src={`${
                    el.profile_path === null
                      ? NotFound
                      : `${URL_IMAGE}${el.profile_path}`
                  }`}
                />
                <NameActor>{el.original_name}</NameActor>
                <Character>{el.character}</Character>
              </div>
            </NavL>
          ))}
        </ContainerAllCredits>
      </Main>
    </>
  );
};

export default AllCredits;
