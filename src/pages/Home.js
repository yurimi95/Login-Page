import React from "react";
import { Wrapper, Container } from "./AppWrapper";
import LoginBox from "../component/LoginBox";
import SignUpbox from "../component/SignUpbox";
// import Greeting from "./Greeting";

function Home() {
  // if (isLoggedIn) {
  //   return (
  //     <Wrapper>
  //       <Greeting />
  //     </Wrapper>
  //   );
  // }
  return (
    <Wrapper>
      <Container>
        <LoginBox />
        <SignUpbox />
      </Container>
    </Wrapper>
  );
}

export default Home;
