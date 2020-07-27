import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 35%;
  height: 100%;
  border-radius: 0px 16px 16px 0px;
  background-color: #b8505e;
`;

const SignUpWrapper = styled.div`
  margin: 0 auto;
  margin-top: 240px;
  width: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Header = styled.h1`
  width: 100%;
  font-weight: bold;
  text-align: center;
`;

const Comment = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
`;

const SignUpBtn = styled.button`
  width: 200px;
  height: 55px;
  margin-top: 30px;
  border-radius: 30px;
  border: none;
  color: #b8505e;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
`;

const SignUpbox = () => {
  return (
    <Wrapper>
      <SignUpWrapper>
        <Header>Hello, Guest!</Header>
        <Comment>아직 회원이 아니신가요?</Comment>
        <SignUpBtn>회원가입</SignUpBtn>
      </SignUpWrapper>
    </Wrapper>
  );
};

export default SignUpbox;
