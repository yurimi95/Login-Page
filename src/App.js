import React from "react";
import { Wrapper, Container } from "./AppWrapper";
import LoginBox from "./component/LoginBox";
import SignUpbox from "./component/SignUpbox";

function App() {
  return (
    <Wrapper>
      <Container>
        <LoginBox />
        <SignUpbox />
      </Container>
    </Wrapper>
  );
}

export default App;
