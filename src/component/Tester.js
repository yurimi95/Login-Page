import React, { Component } from "react";
// import { SignUpbox, SignUpBtn } from "./SignUpbox";
// // import { LoginBox, LoginContent, LoginBtn } from "./LoginBox";
// import InputWithLabel from "./InputWithLabel";

const Tester = () => {
  return alert("hi!");
};

export default Tester;

// class Register extends Component {
//   render() {
//     return (
//       <>

//         {/* <InputWithLabel label="이메일" name="email" placeholder="이메일" />
//         <InputWithLabel label="아이디" name="username" placeholder="아이디" />
//         <InputWithLabel
//           label="비밀번호"
//           name="password"
//           placeholder="비밀번호"
//           type="password"
//         />
//         <InputWithLabel
//           label="비밀번호 확인"
//           name="passwordConfirm"
//           placeholder="비밀번호 확인"
//           type="password"
//         />
//         {/* <SignUpBtn>회원가입</SignUpBtn> */}
//         {/* <LoginBtn to="/auth/login">로그인</LoginBtn>} */}
//       </>
//     );
//   }
// }

// export default Register;

//서버로 가입 양식 제출
handleSubmit = (e) => {
  e.preventDefault();
  const { userId, IdCheck, pwCheck, pw, re_pw } = this.state;

  const signUpInfo = {
    userId: this.state.IdCheck,
    pw: this.state.pwCheck,
  };

  const signUp_info = {
    method: "POST",
    body: JSON.stringify(signUpInfo),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (
    userId &&
    pw &&
    re_pw &&
    userId === IdCheck &&
    pw === re_pw &&
    re_pw === pwCheck
  ) {
    fetch("http://localhost:3000/user", signUp_info)
      .then(alert("가입이 완료되었습니다."))
      .then(this.PaymentResponse.history.push("/login"));
  } else {
    alert("입력값을 확인해주세요");
  }
};
