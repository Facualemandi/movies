import React from "react";
import styled from "styled-components";
import LogoFooter from "../../images/LogoFooter.svg";

const TheFooter = styled.footer`
  width: 100vw;
  background-color: #032541;
  height: auto;
  padding-bottom: 15px;
`;

const Logo = styled.img`
  width: 200px;
  height: 230px;
  margin: 15px;
`;

const AllContainer = styled.section`
  width: 100vw;
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  margin: 5px;
  
  p{
      padding: 5px;
      font-family: 'Roboto', sans-serif;
    }
    
    @media (min-width:1080px){
        grid-template-columns: repeat(4, 1fr);
        margin: auto;
        
  }
  
`;
const H3 = styled.h3`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  padding: 5px;
`;
const Footer = () => {
  return (
    <>
      <TheFooter>
        <AllContainer>
          <Logo alt="" src={LogoFooter} />

          <Container>
            <section>
              <H3>Lo básico</H3>
              <p>Sobre TMDB</p>
              <p>Contáctenos</p>
              <p>Foro de soporte</p>
              <p>Api</p>
            </section>

            <section>
              <H3>Involucrarse</H3>
              <p>Biblia de contribuciones</p>
              <p>Agregar nueva película</p>
              <p>Agregar nuevo programa de televisión</p>
            </section>

            <section>
              <H3>Comunidad</H3>
              <p>Pautas</p>
              <p>Discusiones</p>
              <p>Tabla de clasificación</p>
              <p>Twitter</p>
            </section>

            <section>
              <H3>Legal</H3>
              <p>Términos de Uso</p>
              <p>Condiciones de uso de la API</p>
              <p>Política de privacidad</p>
            </section>
          </Container>
        </AllContainer>
      </TheFooter>
    </>
  );
};

export default Footer;