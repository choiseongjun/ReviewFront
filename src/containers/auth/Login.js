import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthContent,
  InputWithLabel,
  AuthButton,
  AlignedLink,
} from "../../components/auth";
import { login, input } from "../../modules/auth";

export function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));
  const dispatch = useDispatch();

  /*   const onClickLogin = useCallback(() => {
    console.log(userid, password);
    axios
      .post("http://172.30.1.44:8080/api/auth/signin", {
        userid: userid,
        password: password,
      })
      .then(function (response) {
        alert("로그인에 성공했습니다");
        console.log(response);
      })
      .catch(function (error) {
        alert("로그인에 실패했습니다");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [userid, password]); */
  useEffect(() => {
    if (auth) {
      console.log("로그인 성공");
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({ userid, password }));
  };
  const onChangeUserid = (e) => {
    setUserid(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <AuthContent title="로그인하기">
      <InputWithLabel
        label="아이디"
        name="userid"
        placeholder="아이디"
        type="email"
        value={userid}
        onChange={onChangeUserid}
      />
      <InputWithLabel
        label="비밀번호"
        name="password"
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <AuthButton onClick={handleClick}>로그인</AuthButton>
      <div
        style={{
          display: "inline-flex",
          "justify-content": "center",
          width: "100%",
          padding: "15px 0",
          "border-bottom": "1px solid #ccc",
        }}
      >
        <AlignedLink>아이디 찾기</AlignedLink>
        <AlignedLink>비밀번호 찾기</AlignedLink>
        <AlignedLink>회원가입하기</AlignedLink>
      </div>
      <div>
        <h4
          style={{
            "padding-top": "15px",
          }}
        >
          소셜계정으로 로그인
        </h4>
        <AuthButton>네이버 계정으로 로그인</AuthButton>
        <AuthButton>페이스북 계정으로 로그인</AuthButton>
      </div>
    </AuthContent>
  );
}

export default Login;
