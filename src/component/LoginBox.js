import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  border-radius: 16px 0px 0px 16px;
  background-color: white;
`;

const LoginWrapper = styled.div`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  margin-top: 150px;
`;

const LoginHeader = styled.h1`
  width: 100%;
  color: #b8505e;
  text-align: center;
`;
const LoginContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.p`
  width: 100%;
  color: #666;
  text-align: center;
  font-size: 14px;
  margin-top: 30px;
`;

const InputId = styled.input`
  margin-top: 10px;
  width: 385px;
  line-height: 40px;
  background-color: #faffbd;
  border-radius: 3px;
  border: none;
`;

const InputPw = styled.input`
  margin-top: 10px;
  width: 385px;
  line-height: 40px;
  background-color: #faffbd;
  border-radius: 3px;
  border: none;
`;

const ForgotTitle = styled.p`
  margin-top: 30px;
  width: 100%;
  color: #b8505e;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

const LoginBtn = styled.button`
  width: 200px;
  height: 55px;
  margin-top: 20px;
  border-radius: 30px;
  border: none;
  color: white;
  background-color: #b8505e;
  font-size: 16px;
  font-weight: bold;
`;

const LoginBox = () => {
  return (
    <Wrapper>
      <LoginWrapper>
        <LoginHeader>인아이디어 컨텐츠몰 로그인</LoginHeader>
        <LoginContent>
          <LoginTitle>아이디/비밀번호를 입력하세요.</LoginTitle>
          <InputId placeholder="아이디"></InputId>
          <InputPw placeholder="비밀번호"></InputPw>
          <ForgotTitle>비밀번호를 잊으셨나요?</ForgotTitle>
          <LoginBtn>로그인</LoginBtn>
        </LoginContent>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginBox;
