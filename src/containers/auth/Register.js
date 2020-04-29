import React, { Component } from 'react';
import {
  AuthContent,
  InputWithLabel,
  AuthButton,
  AlignedLink,
} from '../../components/auth';
import { remcalc } from '../../lib/styles/utils';

class Register extends Component {
  render() {
    return (
      <AuthContent title="회원가입">
        <div
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <InputWithLabel
            label="닉네임"
            name="text"
            placeholder="아이디를 입력해주세요(4~11자)"
          />
          <input
            type="submit"
            value="중복확인"
            style={{
              height: '34px',
              'text-align': 'center',
              position: 'absolute',
              right: '0',
              bottom: '0',
              width: '80px',
            }}
          />
        </div>
        <InputWithLabel
          label="이메일주소"
          name="email"
          placeholder="EX) WOOZOOWEB@naver.com"
        />
        <InputWithLabel
          label="이메일주소 확인"
          name="username"
          placeholder="EX) WOOZOOWEB@naver.com"
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="8자 이상의 한글, 영어 특수문자 조합"
          type="password"
        />
        <InputWithLabel
          label="비밀번호 확인"
          name="passwordConfirm"
          placeholder="8자 이상의 한글, 영어 특수문자 조합"
          type="password"
        />
        <div
          style={{
            display: 'inline-flex',
            padding: '15px 0',
            width: '100%',
            'justify-content': 'center',
          }}
        >
          <div>이미 아이디가 있으신가요?</div>
          <AlignedLink>로그인</AlignedLink>
          <AlignedLink>비밀번호 찾기</AlignedLink>
        </div>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <AuthButton flex>취소하기</AuthButton>
          <AuthButton flex>회원가입</AuthButton>
        </div>
      </AuthContent>
    );
  }
}

export default Register;
