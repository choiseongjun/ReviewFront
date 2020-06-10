import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import { remcalc } from "../lib/styles/utils";
import ProgressIcon from "../components/common/ProgressIcon";
import Button from "../components/common/Buttons/Button";

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
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 560px;
  border: 1px solid ${palette.gray5};
  background-image: url("https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80");
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
  font: Bold ${remcalc(22)} / 29px Roboto;
  color: ${palette.teal2};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  div + div {
    margin-left: ${remcalc(12)};
  }
`;

const Word = styled.div``;

const Line = styled.div`
  width: calc(100vw / 8);
  height: 1px;
  background: white;
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

const CopyArea = styled.div``;

const MainCopy = styled.h3`
  font-size: ${remcalc(20)};
`;

const SubCopy = styled.p`
  font-size: ${remcalc(15)};
  margin-top: 13px;
`;

function Share() {
  return (
    <Bg>
      <Wrapper>
        <TitleBar>
          <TitleText>공유하기</TitleText>
          <ProgressIcon step="1"></ProgressIcon>
        </TitleBar>
        <VisualWrap>
          <ImgWrap>
            <DecoText>
              <Word>창작자</Word>
              <Line />
              <Word>WOOZOOWEB</Word>
              <Line />
              <Word>사용자</Word>
            </DecoText>
          </ImgWrap>
          <TextWrap>
            <CopyArea>
              <MainCopy>당신의 서비스를 공유해볼까요?</MainCopy>
              <SubCopy>
                좋은 서비스를 공유해서 사람들에게 널리 알려보세요. <br />
                내가 만든 서비스 우주웹에서 만나봐요.
              </SubCopy>
            </CopyArea>
            <Link to="/register">
              <Button size="long" color="tealnblack">
                다음
              </Button>
            </Link>
          </TextWrap>
        </VisualWrap>
      </Wrapper>
    </Bg>
  );
}

export default Share;
