import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NullAvatar from "../../../images/ImagenNotFund.jpg";
import TheAvatar from "../../../images/avatar.jpg";
import { useReactQuery } from "../../../hooks/useReactQuery";

const Main = styled.main``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const DivContainerUser = styled.div`
  display: flex;
  margin: 5px;
  margin-top: 30px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.164);
`;
const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  h4 {
    font-family: "Montserrat", sans-serif;
    margin: 3px;
    font-size: 14px;
    font-weight: 400;

    span {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 600;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    margin: 3px;
    font-size: 14px;
    font-weight: 400;

    span {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const Content = styled.p`
  padding-top: 15px;
  max-height: 250px;
  overflow-y: auto;
`;

const AllReview = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 15px;
  margin-left: 10px;
`;

const NoReview = styled.p`
 font-family: 'Roboto', sans-serif;
 font-size: 25px;
 margin: 10px;

`

const Reviews = () => {
  const { id, name, watch } = useParams();
  const API_URL = `https://api.themoviedb.org/3/${watch}/${id}/reviews?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=1`;
  const { data, status } = useReactQuery(`${API_URL}`, `${name}`);

  if (status === "loading") {
    return <p>Cargando</p>;
  }
  const newData = data.results.splice(0, 1);





  return (
    <>
      <Main>
        {newData.length === 0
          ? <NoReview>No hay comentarios</NoReview>
          : newData.map((el) => (
              <section key={el.id}>
                <DivContainerUser>
                  <Avatar alt="" src={TheAvatar } />
                  <DivUser>
                    <h4> A review <span>{el.author}</span> </h4>
                    <Content>{el.content}</Content>
                  </DivUser>
                </DivContainerUser>
              </section>
            ))}
        <AllReview>Read All View</AllReview>
      </Main>
    </>
  );
};

export default Reviews;
