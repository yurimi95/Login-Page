import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
`;

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  width: 900px;
  height: 515px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  box-shadow: 5px 5px 15px #e8e8e8;
  background-color: #ffffff;
`;

const Header = styled.p`
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  color: #b8505e;
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  text-align: center;
  margin: 20px 0px;
`;

const Username = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  text-align: center;
  margin: 20px 0px;
`;

const Logout = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  background-color: #b8505e;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Container>
        <Form>
          <Header>인아이디어 컨텐츠몰</Header>
          <Title>Welcome!</Title>
          <Username>로그인 상태입니다.</Username>
          <Link to="/">
            <Logout type="submit">로그아웃</Logout>
          </Link>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Greeting;
