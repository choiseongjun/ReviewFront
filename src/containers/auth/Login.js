import React, { Component } from 'react';
import {
  AuthContent,
  InputWithLabel,
  AuthButton,
  AlignedLink,
} from '../../components/auth';

class Login extends Component {
  render() {
    return (
      <AuthContent title="로그인하기">
        <InputWithLabel
          label="아이디"
          name="userid"
          placeholder="아이디"
          type="email"
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <AuthButton>로그인</AuthButton>
        <div
          style={{
            display: 'inline-flex',
            'justify-content': 'center',
            width: '100%',
            padding: '15px 0',
            'border-bottom': '1px solid #ccc',
          }}
        >
          <AlignedLink>아이디 찾기</AlignedLink>
          <AlignedLink>비밀번호 찾기</AlignedLink>
          <AlignedLink>회원가입하기</AlignedLink>
        </div>
        <div>
          <h4
            style={{
              'padding-top': '15px',
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
}

export default Login;
