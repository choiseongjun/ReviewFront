import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { remcalc } from '../../lib/styles/utils';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
  width: ${remcalc(545)};
`;

// 로고
const LogoWrapper = styled.div`
  background: white;
  height: 7rem;
  border-bottom-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Link)`
  color: ${palette.teal3};
  font-family: 'Roboto';
  font-size: ${remcalc(22)};
  font-weight: bold;

  span {
    display: block;
    text-align: center;
    font-size: ${remcalc(50)};
  }
`;

// children 이 들어가는 곳
const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const AuthWrapper = ({ children }) => (
  <Positioner>
    <ShadowedBox>
      <LogoWrapper>
        <Logo to="/">
          <span>🐱‍🏍</span>
          WOOZUWEB
        </Logo>
      </LogoWrapper>
      <Contents>{children}</Contents>
    </ShadowedBox>
  </Positioner>
);

export default AuthWrapper;
