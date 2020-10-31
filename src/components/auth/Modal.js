import React from "react";
import styled, { css } from "styled-components";
import { remcalc } from "../../lib/styles/utils";
import palette from "../../lib/styles/palette";
import Button from "../common/Buttons/Button";

//가입시 아이디, 이메일 중복확인 버튼 작업필요
const Modal = ({ type, onChange, onSubmit, onClose, onChangeForm }) => {
  const text = typeList[type];
  return (
    <Container>
      <ContentWrap>
        <Content>
          <LoginTitle>{text}하기</LoginTitle>
          <Button type="button" onClick={onClose} color="transparent">
            X
          </Button>
          <LogoWrap>
            <LogoImg src="https://image.flaticon.com/icons/svg/2240/2240764.svg"></LogoImg>
            <LogoText>WebPlace</LogoText>
          </LogoWrap>
          <LoginForm onSubmit={onSubmit}>
            <LoginFormListWrap>
              <LoginFormList>
                <LoginLabel for="userid">아이디</LoginLabel>
                <LoginInput
                  name="userid"
                  id="userid"
                  placeholder="ID를 입력해 주세요"
                  onChange={onChange}
                />
              </LoginFormList>
              {type === "register" && (
                <>
                  <LoginFormList>
                    <LoginLabel for="email">이메일</LoginLabel>
                    <LoginInput
                      name="email"
                      id="email"
                      type="email"
                      placeholder="EMAIL를 입력해 주세요"
                      onChange={onChange}
                    />
                  </LoginFormList>
                  <LoginFormList>
                    <LoginLabel for="name">이름</LoginLabel>
                    <LoginInput
                      name="name"
                      id="name"
                      placeholder="성함을 입력해 주세요"
                      onChange={onChange}
                    />
                  </LoginFormList>
                </>
              )}
              <LoginFormList>
                <LoginLabel for="password">비밀번호</LoginLabel>
                <LoginInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="PASSWORD를 입력해 주세요"
                  onChange={onChange}
                />
              </LoginFormList>
              {type === "register" && (
                <LoginFormList>
                  <LoginLabel for="passwordConfirm">비밀번호 확인</LoginLabel>
                  <LoginInput
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="PASSWORD를 입력해 주세요"
                    onChange={onChange}
                  />
                </LoginFormList>
              )}
              <LoginFormList>
                <Button type="submit" color="lightGray" border fullwidth>
                  {text}하기
                </Button>
              </LoginFormList>
              {type === "login" && (
                <LoginFormList>
                  <InlineButton>아이디 찾기</InlineButton>
                  <InlineButton>비밀번호 찾기</InlineButton>
                  <InlineButton primary onClick={onChangeForm}>
                    회원가입 
                  </InlineButton>
                </LoginFormList>
              )}
            </LoginFormListWrap>
          </LoginForm>
        </Content>
        {/* {type === "login" && (
          <Content>
            <SubTitle>소셜계정으로 로그인</SubTitle>
            <LoginForm onSubmit={onSubmit}>
              <Button type="submit" color="green" border fullwidth>
                네이버 계정으로 로그인
              </Button>
              <Button type="submit" color="blue" border fullwidth>
                페이스북 계정으로 로그인
              </Button>
            </LoginForm>
          </Content>
        )} */}
      </ContentWrap>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrap = styled.div`
  height: auto;
  flex-direction: column;
  padding-top: ${remcalc(50)};
`;

const Content = styled.div`
  background: white;
  padding: ${remcalc(30)} ${remcalc(60)};
  width: ${remcalc(545)};
  height: auto;
  position: relative;

  & + & {
    padding: ${remcalc(20)} ${remcalc(60)} ${remcalc(35)};
    border-top: 1px solid ${palette.gray2};

    button {
      margin-top: ${remcalc(20)};
    }
  }

  & > button {
    position: absolute;
    top: 0.6rem;
    right: 0;
    font-size: 1.5rem;
  }
`;

const LoginTitle = styled.h1`
  position: absolute;
  top: ${remcalc(-50)};
  left: 0;
  font-size: ${remcalc(22)};
  color: white;
`;

const LogoWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 15px;
`;

const LogoImg = styled.img`
  width: ${remcalc(50)};
`;

const LogoText = styled.h2`
  font-family: "Roboto";
  font-size: ${remcalc(22)};
  color: ${palette.teal1};
`;

const LoginForm = styled.form``;

const LoginFormListWrap = styled.ul``;

const LoginFormList = styled.li`
  text-align: center;

  button:only-child {
    margin-top: ${remcalc(25)};
  }
`;

const LoginLabel = styled.label`
  display: block;
  font-size: ${remcalc(14)};
  font-weight: bold;
  color: black;
  margin: ${remcalc(15)} 0 ${remcalc(8)} 0;
  text-align: left;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: ${remcalc(12)};
  border: 1px solid ${palette.gray2};

  &::placeholder {
    font-size: ${remcalc(15)};
    color: ${palette.gray2};
  }
`;

const InlineButton = styled.button`
  margin-top: ${remcalc(17)};
  padding: 0 ${remcalc(15)};
  border: none;
  background: none;
  font-size: ${remcalc(12)};
  color: ${palette.gray5};
  cursor: pointer;

  &:hover {
    color: ${palette.gray8};
  }

  & + & {
    border-left: 1px solid ${palette.gray2};
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${palette.teal2};

      &:hover {
        color: ${palette.teal3};
      }
    `}
`;

const SubTitle = styled.h2`
  font-size: ${remcalc(14)};
  font-weight: bold;
  color: black;
  text-align: left;
`;

const typeList = {
  login: "로그인",
  register: "회원가입",
};
