import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../hooks/useReactQuery";

const Img = styled.img`
  width: 130px;
  height: 170px;
`;

const DivImg = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px 0 rgba(106, 106, 106, 0.875);
  border-radius: 10px;

  div {
    min-height: 170px;
  }
`;

const OverView = styled.p`
  padding: 10px;
  max-height: 120px;
  overflow-y: auto;
  font-family: "Roboto", sans-serif;
`;

const SecOne = styled.section`
  height: auto;
  margin: 10px;
`;
const SecTwo = styled.section`
  height: 108px;
  display: flex;
  justify-content: start;
  align-items: flex-end;
`;

const Title = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;
const Time = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;
const NavL = styled(NavLink)`
color:  black;
text-decoration: none;
`

const MovieSearch = () => {
  const { movie, toSearch } = useParams();
  console.log(useParams())
  const URL_IMG = "https://image.tmdb.org/t/p/w500";

  const API_URL = `https://api.themoviedb.org/3/search/${toSearch}?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&query=${movie}&page=1`;

  const { data, status } = useReactQuery(`${API_URL}`, `${movie}`);

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }

  return (
    <>
      <div>
        <p>Facu</p>
        <p>Facu</p>
        <p>Facu</p>
      </div>

      {data.results.map((data) => (
        <>
        <NavL to={`/${toSearch}/${data.id}/${data.title || data.original_title}`}>
          <DivImg>
            <Img alt={data.title} src={`${URL_IMG}${data.poster_path}`} />

            <div>
              <SecOne>
                <Title>{data.title || data.original_title}</Title>
                <Time>{data.release_date}</Time>
              </SecOne>

              <SecTwo>
                <OverView>{data.overview}</OverView>
              </SecTwo>
            </div>
          </DivImg>
        </NavL>
        </>
      ))}
    </>
  );
};

export default MovieSearch;
