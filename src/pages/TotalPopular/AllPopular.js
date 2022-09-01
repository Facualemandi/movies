import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../../Helper/Helphttps";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import Nav from "../../components/ViewHome/1-Nav/Nav";
import Footer from "../../components/ViewHome/7-Footer/Footer";

const Img = styled.img`
  width: 91px;
  height: 141px;
  border-radius: 5px;
`;
const SectionAll = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 95vw;
`;
const Name = styled.p`
  font-family: "Heebo", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding-top: 10px;
`;
const Data = styled.p`
  color: grey;
  font-family: "Heebo", sans-serif;
`;
const OverView = styled.p`
  color: black;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
  max-height: 70px;
  overflow-y: auto;
  margin-top: 10px;
`;
const SecionBtns = styled.section`
  display: flex;
  width: 95vw;
  margin: auto;
  margin-bottom: 15px;
`;
const Buttons = styled.button`
  width: 100%;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-family: "Heebo", sans-serif;
  font-size: 18px;
  background-color: #d3edff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconsR = styled(BiChevronLeft)`
  width: 35px;
  font-size: 25px;
  font-weight: bold;
`;
const IconsL = styled(BiChevronRight)`
  width: 35px;
  font-size: 25px;
  font-weight: bold;
`;
const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  margin-top: 15px;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 230px;
  display: flex;
  box-shadow: 0 0 5px 0 rgba(137, 137, 137, 0.57);
  border-radius: 10px;
  width: 100%;
  margin: 10px;
  padding: 5px;

  p {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 15px;
  }
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
  width: 100vw;
  text-decoration: none;

  p {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AllPopular = () => {
  const { watch } = useParams();
  console.log(useParams());
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const [page, setPage] = useState(1);

  const newPage = () => {
    setPage(page + 1);
    console.log(page);
  };
  const previusPage = () => {
    setPage(page - 1);
    console.log(page);
  };

  const API_URL = `https://api.themoviedb.org/3/${watch}/popular?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=${page}`;

  const getAll = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0].results;
  };

  const { data, status } = useQuery([`${page}`], getAll);

  if (status === "loading") {
    return <p>cargando...</p>;
  } else {
    console.log(data);
  }

  return (
    <>
      <SecondNav to={"/"}>
        <p>Volver</p>
      </SecondNav>

      <main>
        <H3> Popular {`${watch}`}</H3>

        <SectionAll>
          {data.map((obj) => (
            <NavL key={obj.id} to={`/${watch}/${obj.id}/${obj.title}`}>
              <Img
                alt={obj.original_title}
                src={`${URL_IMAGE}${obj.poster_path}`}
              />
              <div>
                <div>
                  <Name>{obj.original_title}</Name>
                  <Data>{obj.release_date}</Data>
                </div>
                <OverView>{obj.overview}</OverView>
              </div>
            </NavL>
          ))}
        </SectionAll>

        <SecionBtns>
          <Buttons onClick={previusPage}>
            {" "}
            <IconsR /> Anterior
          </Buttons>
          <Buttons onClick={newPage}>
            Siguiente <IconsL />
          </Buttons>
        </SecionBtns>
      </main>
      <Footer />
    </>
  );
};

export default AllPopular;
