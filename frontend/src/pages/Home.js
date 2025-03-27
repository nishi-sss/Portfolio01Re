import React from "react";
import styled from "styled-components";

// S3の画像URL
const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com";

// 全体のコンテナ
const HomeContainer = styled.div`
  position: relative;
  width: 100%;  /* スマホで白抜きにならないよう修正 */
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  font-family: 'Lora', serif; /* フォント適用 */

  @media (max-width: 768px) { 
    width: 100%; /* スマホでの白抜き防止 */
  }
`;

// 背景画像
const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  filter: brightness(1.7) contrast(1.2);
`;

// ロゴ
const LogoImage = styled.img`
  position: absolute;
  top: 5%;
  left: 1%;
  width: 200px;
  opacity: 0.2;

  @media (max-width: 768px) { 
    width: 160px; /* 0.8倍に縮小 */
  }
`;

// タイトルの各単語
const TitleContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  display: flex;
  flex-direction: column;
`;

// タイトルのフォントサイズをレスポンシブ対応
const TitleWord = styled.h1`
  font-size: 3.0rem;
  color: #C0C0C0;
  opacity: 0.4;
  margin: 0;

  @media (max-width: 768px) { 
    font-size: 1.5rem; /* スマホでは半分のサイズ */
  }
`;

const Gallery = styled(TitleWord)` margin-left: 200px; `;
const In = styled(TitleWord)` margin-left: 190px; `;
const The = styled(TitleWord)` margin-left: 250px; `;
const Forest = styled(TitleWord)` margin-left: 210px; `;

// サブタイトル
const Subtitle = styled.p`
  position: absolute;
  bottom: 5%;
  left: 2%;
  font-size: 1.2rem;
  color: #C0C0C0;
  opacity: 0.4;
`;

// 追加の `Enter the Silence`
const EnterSilence = styled.p`
  position: absolute;
  bottom: 6%;
  left: 60%;
  font-size: 1.2rem;
  color: #C0C0C0;
  opacity: 0.4;
`;

// 画像コンテナ
const PhotoContainer = styled.div`
  position: absolute;
  top: 48%;
  left: 60%;
  width: 53%; 
  height: auto;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 225)) blur(1px);

  @media (max-width: 1024px) { 
    width: 68%; /* タブレットでは 1.2倍 */
  }

  @media (max-width: 768px) { 
    width: 75%; /* スマホでは 1.2倍 */
  }
`;

// メイン画像
const MainPhoto = styled.img`
  width: 100%;
  height: auto;
  display: block;

   /* 👇 フェードインアニメーションを追加 */
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
    }
`;

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={`${S3_BUCKET_URL}/background_forest.jpg`} alt="Forest Background" />
      <LogoImage src={`${S3_BUCKET_URL}/Logo.svg`} alt="Logo" />
      
      {/* タイトル */}
      <TitleContainer>
        <Gallery>Gallery</Gallery>
        <In>In</In>
        <The>The</The>
        <Forest>Forest</Forest>
      </TitleContainer>

      {/* サブタイトル */}
      <Subtitle>Enter the Silence</Subtitle>
      <EnterSilence>Exploring silence and simplicity through design.</EnterSilence>

      {/* 画像 */}
      <PhotoContainer>
        <MainPhoto src={`${S3_BUCKET_URL}/MistyForest.jpg`} alt="Misty Forest" />
      </PhotoContainer>
    </HomeContainer>
  );
};

export default Home;

