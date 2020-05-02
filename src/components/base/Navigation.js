import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { remcalc } from "../../lib/styles/utils";
import CenterWrapper from "../../components/common/CenterWrapper";
import ModalPortal from "../../ModalPortal";
import Modal from "../../containers/auth/ModalContainer";

const TopNav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: white;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div,
  ul {
    display: flex;
  }

  li {
    font-size: ${remcalc(16)};

    &:hover {
      color: ${palette.teal3};
    }
  }

  .logo-title {
    color: ${palette.teal2};
    font-weight: bold;
    font-size: ${remcalc(22)};
  }

  .menu-list {
    font-weight: bold;

    li {
      padding: ${remcalc(27)} ${remcalc(20)};
      cursor: pointer;
    }
  }
`;

function Navigation({ user, state, onClick, onClose, onLogout }) {
  return (
    <TopNav>
      <CenterWrapper>
        <Link to="/">
          <div className="logo">
            <div className="logo-img">
              <span
                className="emoji"
                role="img"
                aria-label="balloon"
                aria-hidden="false"
                value="balloon"
              >
                🎈
              </span>
            </div>
            <span className="logo-title">WOOZUWEB</span>
          </div>
        </Link>

        <ul className="menu-list">
          <Link to="/service">
            <li className="menu-item">서비스 탐색</li>
          </Link>
          <li className="menu-item">인기 서비스</li>
          <li className="menu-item">커뮤니티</li>
          <li className="menu-item">공유하기</li>
          {console.log("user: ", user)}
          {user ? (
            <li className="menu-item" onClick={onLogout}>
              로그아웃
            </li>
          ) : (
            <li className="menu-item" onClick={onClick}>
              로그인
            </li>
          )}
        </ul>
      </CenterWrapper>
      {state && (
        <ModalPortal>
          <Modal onClose={onClose} />
        </ModalPortal>
      )}
    </TopNav>
  );
}

export default Navigation;
