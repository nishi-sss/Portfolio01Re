import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  font-family: 'Lora', serif;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  position: relative;
`;

/* タイトルを左上に固定 */
const Title = styled.h1`
  position: absolute;
  top: 1%;
  left: 5%;
  font-size: 4.0rem;
  transform: rotate(3deg); /* やや右下がり */
  color: #C0C0C0;
  opacity: 0.7;
  @media (max-width: 1024px){
    font-size:5.0rem;
    }
@media (max-width: 768px){
    font-size:1.5rem;   
    }

`;

/* フォーム全体を右寄せ＆縦長に */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 55vh; /* フォームの高さを広げる */
  align-self: flex-end;
  margin-right: 10%;
  gap: 3.0rem;

  @media (max-width: 1024px){
  margin-right: 10%;
  width: 45%;  
    }
  @media (max-width: 768px){
    margin-top:-40%;
    width: 80%;
    margin-right: 15%;
    gap: 1rem;
    }

`;

/* 各入力欄 */
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  background: #777;
  color: #fff;

  &::placeholder {
    color: #bbb;
  }
`;

/* 必須マークを入力ボックスの右外に配置 */
const RequiredLabel = styled.span`
  position: absolute;
  right: -80px; /* 調整して位置を調整 */
  color: #C0C0C0;
  font-size: 1.2rem;
  @media (max-width: 1024px){
    
    }
@media (max-width: 768px){
    font-size: 0.8rem;
    right:-60px;
    }

`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  background: #777;
  color: #fff;

  &::placeholder {
    color: #bbb;
  }
`;

const SubmitButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background: #999;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #bbb;
  }
  
  @media (max-width: 1024px){
    
    }
@media (max-width: 768px){
    
    }

`;

/* チェックボックスの説明とリスト */
const CheckboxWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
@media (max-width: 1024px){
  width: 45%;
  left: 1%;   
    }
@media (max-width: 768px){  
position: absolute;
width: 90%;
margin-top: 85%;
    }

`;

const CheckboxLabel = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #C0C0C0;
  opacity: 0.7;
  @media (max-width: 1024px){
    
    }
  @media (max-width: 768px){
  position: absolute;
  font-size:1.2rem;
  margin-top: -20%;
  left: 8%;
    }

`;

/* チェックボックスとラベルの配置 */
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 1024px){
    
    }
@media (max-width: 768px){
  position: absolute;
  gap: 10px;
    }

`;

/* チェックボックスのスタイル */
const Checkbox = styled.input`
  width: 18px;
  height: 18px;
`;

/* "Gallery in the Forest" のフォントサイズ調整 */
const CheckboxText = styled.label`
  font-size: 1.3rem; /* ここでフォントサイズ調整！ */
  color: #C0C0C0;
  @media (max-width: 1024px){
    
    }
@media (max-width: 768px){
  font-size: 1.0rem;  
    }

`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>

      {/* チェックボックスの説明と選択肢 */}
      <CheckboxWrapper>
        <CheckboxLabel>閲覧希望のサイトを選択してください。（複数選択可）</CheckboxLabel>
        <CheckboxContainer>
          <Checkbox type="checkbox" id="galleryCheckbox" />
          <CheckboxText htmlFor="galleryCheckbox">
            Gallery in the Forest - Enter the Silence
          </CheckboxText>
        </CheckboxContainer>
      </CheckboxWrapper>

      {/* フォーム */}
      <Form>
        <InputWrapper>
          <Input type="text" placeholder="your name" required />
          <RequiredLabel>（必須）</RequiredLabel>
        </InputWrapper>

        <InputWrapper>
          <Input type="email" placeholder="example@example.com" required />
          <RequiredLabel>（必須）</RequiredLabel>
        </InputWrapper>

        <TextArea placeholder="お問い合わせ内容" required />
        <SubmitButton>送信</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;


