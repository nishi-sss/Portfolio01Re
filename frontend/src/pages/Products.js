import React from "react";
import styled from "styled-components";

const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com"; // S3のURL

const ProductsContainer = styled.div`
  background-color: #000;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 65%;
  height: 70%;
  top: 30%;
  left: 30%;
  opacity: 0.2; /* 背景画像の不透明度 */
  @media (max-width: 1024px){
    
    }
@media (max-width: 768px){
    
    }


`;

const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 2.0rem;
  color: #C0C0C0;
  @media (max-width: 1024px){
    font-size: 4.0rem;
    top: 1%;
    opacity: 0.8;
    }
@media (max-width: 768px){
    font-size: 2.5rem;    
    }


`;

const AuthButton = styled.button`
  position: absolute;
  top: 25%;
  left: 1%;
  padding: 5px 15px;
  background: #444;
  color: #C0C0C0;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 5px;
  @media (max-width: 1024px){
    
    }
@media (max-width: 768px){

    }


`;

const ProductList = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  color: #C0C0C0;
  font-size: 1.2rem;
  @media (max-width: 1024px){
  left: 10%;  
    }
@media (max-width: 768px){
  left: 20%;    
  font-size: 0.8rem;
  top: 25%;
    }


`;

const ProductItem = styled.div`
  margin-bottom: 20px;
  opacity: 0.6; /* 概要部分の不透明度 */
  @media (max-width: 1024px){
    width: 80%
    }
@media (max-width: 768px){
    width:90%;
    }


`;

const ComingSoon = styled.div`
  position: absolute;
  top: 60%;
  left: 5%;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.3; /* Coming soon の不透明度 */
  @media (max-width: 1024px){
    top: 40%;
    }
@media (max-width: 768px){
    top: 60%;
    font-size:0.8rem;
    }


`;

const PreviewImage = styled.img`
  position: absolute;
  width: 25%;
  top: 25%;
  right: 10%;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 255));
  border-radius: 20px;
  opacity: 0.6;
  @media (max-width: 1024px){
  top: 25%;
  width: 30%;
  right:5%;  
    }
@media (max-width: 768px){
  width: 40%;
  top:40%;
  right:50%;
    }


`;

const Footer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-size: 0.9rem;
  color: #BEB8C9;
  @media (max-width: 1024px){
    width:80%;
    font-size:1.2rem;
    }
@media (max-width: 768px){
    width:90%;
    font-size:0.8rem;
    }


`;

const Products = () => {
  return (
    <ProductsContainer>
      <BackgroundImage src={`${S3_BUCKET_URL}/FantasyForest.jpg`} alt="Background" />
      <Title>Products</Title>
      <AuthButton>認証</AuthButton>
      
      <ProductList>
        <ProductItem>
          <strong>Gallery in the Forest -Enter the Silence-</strong>
          <p>概要：現在のサイトと類似イメージの動的サイトです。</p>
        </ProductItem>
      </ProductList>

      <ComingSoon>Coming soon... テーマ：陰陽師（和風design）</ComingSoon>
      <PreviewImage src={`${S3_BUCKET_URL}/portfolio01_dynamic_sample.jpg`} alt="Preview" />
      
      <Footer>
        認証 - このマークが表示されているサイトは認証制です。フォームからリクエストを送信いただくと、アクセス権をお渡しします。
      </Footer>
    </ProductsContainer>
  );
};

export default Products;

