import React from "react";
import styled from "styled-components";

const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com"; // S3のURL

const AboutContainer = styled.div`
  background-color: #000;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundLogo = styled.img`
  position: absolute;
  width: 48%;
  height: auto;
  opacity: 0.4; /* 不透明度40% */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg); /* ちょい斜め */

  @media (max-width: 1024px) { 
    width: 85%; 
    bottom: 22%;
  }
    @media (max-width: 768px) { 
    width: 85%; 
    bottom: 22%;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 3rem;
  color: #ffffff;
  transform: rotate(-5deg); /* 地味に不規則に斜めｗ */
  @media (max-width: 1024px){
    font-size:4rem;
    top:1%;
    }
@media (max-width: 768px){
    font-size:2.0rem;
    }

`;

const Subtitle = styled.h2`
  position: absolute;
  top: 18%;
  left: 10%;
  font-size: 1.5rem;
  color: #ffffff;
  @media (max-width: 1024px){
    font-size:2.3rem;
    top:15%;
    left:4%;
    }
@media (max-width: 768px){
    font-size:1.5rem;
    }

`;

const Description = styled.p`
  position: absolute;
  top: 30%;
  left: 10%;
  width: 50%;
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.5;
  @media (max-width: 1024px){
   font-size:1.8rem; 
    }
@media (max-width: 768px){
    font-size:1.2rem;
    }

`;

const Skills = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.5;
  @media (max-width: 1024px){
    font-size:1.8rem;
    }
@media (max-width: 768px){
    font-size:1.0rem;
    top:50%;
    }

`;

const Contact = styled.div`
  position: absolute;
  bottom: 5%;
  left: 10%;
  font-size: 1rem;
  color: #ffffff;
`;

const About = () => {
  return (
    <AboutContainer>
      <BackgroundLogo src={`${S3_BUCKET_URL}/Logo.svg`} alt="Background Logo" />
      <Title>About this Site</Title>
      <Subtitle>Where design meets functionality.</Subtitle>
      <Description>
        This site is my portfolio, where ideas and technology come together.
      </Description>
      <Skills>
        <p>Skills:</p>
        <p>Frontend: React, CSS</p>
        <p>Backend: Flask , Flask-CORS </p>
        <p>Cloud: AWS (S3), Heroku</p>
        <p>Deployment: GitHub Pages , Heroku </p>
      </Skills>
      <Contact>
        <p>GitHub: github.com/yourusername</p>
      </Contact>
    </AboutContainer>
  );
};

export default About;

