import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import { remcalc } from "../lib/styles/utils";
import ProgressIcon from "../components/common/ProgressIcon";

const Bg = styled.div`
  background: ${palette.gray0};
  padding-top: 40px;
  padding-bottom: 100px;
`;

const Wrapper = styled.main`
  width: ${remcalc(930)};
  margin: 0 auto;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TitleText = styled.h2`
  font-size: ${remcalc(24)};
`;

const VisualWrap = styled.div`
  border: 1px solid ${palette.gray2};
  margin-bottom: 30px;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 560px;
  border: 1px solid ${palette.gray5};
  background-image: url(${require("../asset/img/sky-1246033_1920@2x.png")});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

const DecoText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  h1 {
    font: Bold ${remcalc(30)} / 29px Roboto;
    margin-bottom: ${remcalc(30)};
  }
  h3 {
    font-size: 20px;
    font-weight: 100;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  height: 160px;
  background: white;
  padding: 35px ${remcalc(50)};
  color: ${palette.gray9};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyeldTab = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  a {
    background-color: white;
    font: ${remcalc(30)} / 29px Roboto;
    text-decoration: none;
    color: black;
    padding: 50px 50px;
  }
  margin-bottom: 30px;
`;

const CopyArea = styled.div``;

function ShareFinish() {
  return (
    <Bg>
      <Wrapper>
        <TitleBar>
          <TitleText>서비스 등록 완료!</TitleText>
          <ProgressIcon step="3"></ProgressIcon>
        </TitleBar>
        <VisualWrap>
          <ImgWrap>
            <DecoText>
              <h1>서비스 등록을 완료 했습니다. </h1>
              <h3>
                한번 메이커님의 서비스를
                <br />
                보러 가보시겠어요?
              </h3>
            </DecoText>
          </ImgWrap>
        </VisualWrap>
        <StyeldTab>
          <Link to="/">내 서비스 보러가기</Link>
          <Link to="/">홈페이지로 가기</Link>
        </StyeldTab>
        <TextWrap>
          <CopyArea>배너존</CopyArea>
        </TextWrap>
      </Wrapper>
    </Bg>
  );
}

export default ShareFinish;
