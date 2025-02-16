import React from "react";
import styled from "styled-components";

const S3_BUCKET_URL = "https://portfolio-static-files-photo.s3.amazonaws.com"; // S3のURL

const WorksContainer = styled.div`
  background-color: #000;
  font-family: 'Lora', serif;
  width: 100vw;
  height: 500vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

// スライドの共通スタイル
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

// メイン画像のスタイル（タブレット & スマホ対応）
const ImageMain = styled.img`
  width: 45%;
  position: absolute;
  left: 10%;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 225)) blur(0.5px);

  @media (max-width: 1024px) { 
    width: 68%; /* タブレットで 1.2倍 */
    left: 55%;
    transform: translateX(-50%);
    top: 10%;
  }

  @media (max-width: 768px) { 
    width: 70%; /* スマホでさらに 1.2倍 */
    left: 50%;
    transform: translateX(-50%);
  }
`;

// 右下のサブ画像（サイズ変更 & 上に移動）
const ImageSub = styled.img`
  width: 22%;
  position: absolute;
  right: 5%;
  border-radius: 15px;
  opacity: 0.7;
  bottom: 5%;

  @media (max-width: 1024px) { 
    width: 30%; /* タブレットで 1.5倍 */
    bottom: 20%;
    right: 5%;
  }

  @media (max-width: 768px) { 
    width: 43%; /* スマホで 1.2倍 */
    bottom: 22%;
  }
`;

// タイトルコンテナ（タブレット & スマホで左寄せ）
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  position: absolute;
  left: 30%;
  top: 0%;

  @media (max-width: 1024px) {
    left: 20%; /* タブレットでやや左寄せ */
    font-size: 1.2rem;
  }

  @media (max-width: 768px) { 
    left: 5%; /* スマホでさらに左寄せ */
    font-size: 0.8rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #C0C0C0;
  opacity: 0.5;
  font-size: clamp(3rem, 4vw, 4.0rem);

  @media (max-width: 768px) { 
    font-size: 2rem; /* スマホで 1.2倍 */
  }
  
`;

const Silent = styled(Title)`
  transform: rotate(-4deg) translate(2px, 2px);
  font-size: 4.0rem;
  @media (max-width: 768px){
    font-size:3rem;
    margin-top: -5%;
    }

`;

const Server = styled(Title)`
  margin-top: 40px;
  font-size: 4.0rem;
  @media (max-width: 768px){
    font-size: 3rem;
    margin-top: 1%;
    }

`;
const Gallery = styled(Title)`
  margin-right: 10px;
  font-size: 4.0rem;
  transform: rotate(-10deg) translate(5px, 5px); /* ちょい右下に移動 */
  
 `;
const In = styled(Title)`
  margin-right: 0px;
  font-size: 3.0rem;
 `;
const The = styled(Title)`
  margin-right: 10px;
 `;
const Forest = styled(Title)`
  margin-right: 100px;
  font-size:3.0rem;
 `;
const Tapp = styled(Title)`
  margin-left: 20px;
  font-size: 5.0rem;
 `;
const Gallery2 = styled(Title)`
  margin-left: 20px;
  font-size: 4.0rem;
  @media (max-width: 1024px){
    margin-left: -200px;
    margin-top: -10%;
    }
   @media (max-width: 768px) { 
    font-size: 2.0rem;
    margin-left:-8%;
    margin-top:1.2%;
  }
 `;
const In2 = styled(Title)`
  margin-left: 0px;
  @media (max-width: 1024px){
    margin-top: -15%;
    }
  @media (max-width: 768px) { 
    font-size: 2.0rem; /* スマホで 1.2倍 */
    margin-top:0%;
    margin-left:15%
  }

 `;
const The2 = styled(Title)`
  margin-left: 0px;
  font-size:3.0rem;
  transform: rotate(5deg) translate(2px, 2px);
  @media (max-width: 1024px){
    margin-top: -5%;
    }

 `;
const Forest2 = styled(Title)`
  margin-left: 0px;
  font-size:3.0rem;
  @media (max-width: 1024px){
    margin-top: -10%;
    }

 `;
const Static2 = styled(Title)`
  margin-left: -200px;
  margin-top: 150px;
  opacity: 0.3;
  transform: rotate(-15deg) translate(5px, 5px); /* ちょい右下に移動 */
  @media (max-width: 1024px){
    margin-left: -17px;
    margin-top: 0%;
    }

 `;
const Codey = styled(Title)`
  margin-left: 20px;
  font-size: 4.0rem;
 `;

// 説明文（タブレット & スマホ対応）
const Description = styled.p`
  position: absolute;
  top: 30%;
  right: -3%;
  text-align: left;
  width: 40%;
  color: #C0C0C0;
  font-size: 1.2rem;
  white-space: pre-line;

  @media (max-width: 1024px) {
    right: auto;
    left: 60%;
    transform: translateX(-50%);
    width: 90%;
    top: 45%;
    font-size: 1.5rem; /* タブレットで 1.2倍 */
  }

  @media (max-width: 768px) { 
    left: 50%;
    top: 38%;
    transform: translateX(-50%);
    width: 90%;
    font-size:1rem;
  }
`;

// 技術スタック（スマホで上に移動 & サイズ変更）
const TechStack = styled.p`
  position: absolute;
  bottom: 0%;
  left: 10%;
  color: #C0C0C0;
  font-size: 1rem;
  white-space: pre-line;

    @media (max-width: 1024px){
    font-size: 1.5rem;
    bottom: 5%;
    left: 2%;
    }
    @media (max-width: 768px) { 
    bottom: 1%;
    transform: translateX(-50%);
    width: 80%;
    margin-left: 40%;
    font-size:0.8rem;
  }
`;
// サブタイトル（変更なし）
const Subtitle = styled.p`
  position: absolute;
  bottom: 6%;
  right: 0;
  color: #C0C0C0;
  font-size: 1.2rem;
  opacity: 0.5;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    bottom: 0%;
    left: 30%;
    width:100%;
  }
  @media (max-width: 768px) { 
    font-size: 1rem; /* スマホで少し小さく */
    width: 50%;
    margin-bottom:-2%;
    left:50%
  }
`;

const Works = () => {
  return (
    <WorksContainer>
      <Slide>
        <ImageMain src={`${S3_BUCKET_URL}/ForestOfDancingFireflies.jpg`} alt="ForestOfDancingFireflies" />
        <Subtitle>Hidden in plant sight</Subtitle>
        <TechStack>
          技術スタック：GAS / Python / Flask / SQLite {"\n"}
          軽量フルスタック & クラウドデータ連携
        </TechStack>
        <TitleContainer>
          <Silent>Silent</Silent>
          <Server>Server</Server>
        </TitleContainer>
        <Description>
          このシステムは、googleFormからの入力を{"\n"}
          googlespreadsheetで受け取ってFlaskで加工し、{"\n"}
          googlesheetに返却するシステムです。{"\n"}
        </Description>
        <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey1" />
      </Slide>
      {/* スライド2 */}
      <Slide>
      <ImageMain src={`${S3_BUCKET_URL}/WaterRipple.jpg`} alt="WaterRipple" />
      <Subtitle>Enter the Silence</Subtitle>
      <TechStack>
        技術スタック：Python / Flask / Flask-CORS / AWS S3 / React / Heroku {"\n"}  
        フルスタック構成 & クラウドデータ連携 / API設計（Blueprint使用） {"\n"}
      </TechStack>
      <TitleContainer>
        <Gallery>Gallery</Gallery>
        <In>in</In>
        <The>the</The>
        <Forest>Forest</Forest>
      </TitleContainer>
      <Description>
          このシステムは、AWSからFlaskAPIを使用して{"\n"}
          画像を取り込み、表示します。{"\n"}
          ポートフォリオ、個人ホームページなど{"\n"}様々な用途で使用可能です。{"\n"}
      </Description>
      <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey" />
    </Slide>

    {/* スライド3 */}
    <Slide>
      <ImageMain src={`${S3_BUCKET_URL}/ClusterOfAzaleas.jpg`} alt="ClusterOfAzaleas" />
      <Subtitle>Your tasks, simplified.</Subtitle>
      <TechStack>
          技術スタック(予定)：フロントエンド：React + TailwindCSS {"\n"}
          バックエンド：Flask , Flask-SQLAlchemy / データベース：SQLite {"\n"}
          デプロイ： AWS S3 + Lambda or Heroku {"\n"}
          機能：右クリックメニュー(React-ContextMenu) /スケジュール管理(APScheduler or Celery){"\n"}
      </TechStack>
      <TitleContainer>
        <Tapp>Tapp</Tapp>
      </TitleContainer>
      <Description>
          - 次世代のタスク管理システム - {"\n"} 現在、開発タイムトライアル中！進捗：０％ {"\n"}
          2025/2/15 開発スタート！{"\n"}リアルタイムで進捗公開予定！{"\n"}
          詳細な設計 & 付箋設計はこちら↓　{"\n"} 
            rink {"\n"}
          開発日記付き！{"\n"}（リアルタイムの開発の記録も公開！）{"\n"}
          Coming Soon... 本番リリースまでお楽しみに！{"\n"}
      </Description>
      <ImageSub src={`${S3_BUCKET_URL}/`} alt="" />
    </Slide>

    {/* スライド4 */}
    <Slide>
      <ImageMain src={`${S3_BUCKET_URL}/TreeInTheFog.jpg`} alt="TreeInTheFog" />
      <Subtitle>Enter the Silence...</Subtitle>
      <TechStack>
          技術スタック：Python / Flask / Flask-CORS / AWS S3 / React / Heroku {"\n"}  
          フルスタック構成 & クラウドデータ連携 / API設計（Blueprint使用）{"\n"}
      </TechStack>
      <TitleContainer>
        <Gallery2>Gallery</Gallery2>
        <In2>In</In2>
        <The2>The</The2>
        <Forest2>Forest</Forest2>
        <Static2>-Static-</Static2>
      </TitleContainer>
      <Description>
          Gallery in the Forestの静的サイトバージョンです。{"\n"}
          コンセプトは無料枠の限界を攻めるです。{"\n"}
      </Description>
      <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey4" />
    </Slide>

    {/* スライド5 */}
    <Slide>
      <ImageMain src={`${S3_BUCKET_URL}/VividSunflowers.jpg`} alt="VividSunflowers" />
      <Subtitle>Carried in your bag,but not in your shadow.</Subtitle>
      <TechStack>
          技術スタック：Python / SpeechRecognition / PyAudio /{"\n"} OpenAI API(GPT-4) / Google Cloud Speech-to-Text / gTTS / playsound{"\n"}  
          音声認識 × AI会話 × 音声合成 を組み合わせたターミナル版アシスタント{"\n"}
      </TechStack>
      <TitleContainer>
        <Codey>Codey</Codey>
      </TitleContainer>
      <Description>
          openaiAPI使用の会話型システムです。{"\n"}
          デスクトップで会話ー＞ラズパイへの移行ー＞{"\n"}
          ぬいぐるみへの組み込みの順に進めていく{"\n"}プロジェクトです。{"\n"}
          今回はデスクトップでの会話を実現しています。{"\n"}
      </Description>
      <ImageSub src={`${S3_BUCKET_URL}/Codey01.jpg`} alt="Codey5" />
    </Slide>
  </WorksContainer>
  );
};

export default Works;

