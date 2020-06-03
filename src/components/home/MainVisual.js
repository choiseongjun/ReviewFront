import React from "react";
import styled from "styled-components";
import CenterWrapper from "../../components/common/CenterWrapper";
import Button from "../../components/common/Buttons/Button.js";
import palette from "../../lib/styles/palette";
import { remcalc } from "../../lib/styles/utils";
import Search from '../common/Search';

function MainVisual() {
  return (
    <Visual>
      <div>
        <CenterWrapper>
          <h1>우주웹 Would you Web?</h1>
          <p>자신에게 필요한 서비스를 찾아보세요.</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="gray" size="xlarge" border="light">
              공유하기
            </Button>
          </div>
          <Search />
        </CenterWrapper>
      </div>
    </Visual>
  );
}

const Visual = styled.section`
  background-image: url(/images/head-bg.png);
  background-size: cover;
  height: 400px;
  background-position: center;
  display: flex;

  & > div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  h1 {
    color: ${palette.teal2};
    font-size: ${remcalc(28)};
    padding: 5px 0;
  }

  p {
    color: white;
    font-size: ${remcalc(22)};
    font-size: 18px;
  }
`;

export default MainVisual;
