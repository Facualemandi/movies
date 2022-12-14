import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../../Helper/Helphttps";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import Footer from "../../components/ViewHome/7-Footer/Footer";
import LoaderPopular from "../../Loaders/LoaderPopular";

const Img = styled.img`
  width: 91px;
  height: 141px;
  border-radius: 5px;
`;
const SectionAll = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 95vw;

  @media (min-width: 780px) {
    width: 780px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
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
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 28%,
    rgba(0, 139, 207, 1) 100%
  );
  color: white;
  @media (min-width: 780px) {
    cursor: pointer;
  }
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

const SectionPerson = styled.section`
  p {
    font-family: "Heebo", sans-serif;
    margin-top: 5px;
  }
  span {
    font-family: "Heebo", sans-serif;
    font-weight: lighter;
    margin-left: 5px;
    color: grey;
  }

  div {
    font-family: "Heebo", sans-serif;
    margin-left: 15px;
    margin-top: 5px;
    div {
      color: grey;
    }
  }
`;

const PopularPeople = () => {
    const [page, setPage] = useState(1);
  const API_URL = `https://api.themoviedb.org/3/person/popular?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=${page}`;
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  

  const getPopularPeople = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    return response[0].results;
  };

  let pageQuery = `pagePople ${page}`;
  console.log(pageQuery)

  const { data, status } = useQuery([`${pageQuery}`], getPopularPeople);

  if (status === "loading") {
    return <LoaderPopular/>;
  }

  const newPage = () => {
    setPage(page + 1);
  };
  const previusPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <SecondNav to={"/"}>
        <p>Volver</p>
      </SecondNav>

      <main>
        <SectionAll>
          {data.map((obj) => (
            <NavL key={obj.id} to={`/person/${obj.id}/${obj.title}`}>
              <Img
                alt={obj.original_title}
                src={`${URL_IMAGE}${obj.poster_path || obj.profile_path}`}
              />
              <div>
                <div>
                  <Name>{obj.original_title || obj.name}</Name>

                  <SectionPerson>
                    <p>
                      Categor??a: <span> {obj.known_for_department}</span>
                    </p>
                    <p>
                      Popularidad: <span> {obj.popularity}</span>
                    </p>
                    <div>
                      Conocida/o por:
                      <div>
                        {obj.known_for
                          .map((el) => el.title || el.original_title)
                          .join(", ")}
                      </div>
                    </div>
                  </SectionPerson>

                  <Data>{obj.release_date}</Data>
                </div>
                <OverView>{obj.overview}</OverView>
              </div>
            </NavL>
          ))}
        </SectionAll>

        <SecionBtns>
          <Buttons onClick={previusPage}>
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

export default PopularPeople;
