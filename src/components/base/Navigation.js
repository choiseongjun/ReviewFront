import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { remcalc } from "../../lib/styles/utils";
import CenterWrapper from "../../components/common/CenterWrapper";
import ModalPortal from "../../ModalPortal";
import Modal from "../../containers/auth/ModalContainer";

import mainLogo from '../../asset/img/webplace_logo.png';

function Navigation({ user, state, onClick, onClose, onLogout }) {
  const logoClick = (e) =>{
    window.location.reload();
  }
  const role = sessionStorage.getItem('role');
  useEffect(() => {
    
  },[])
  return (
    <TopNav>
      <CenterWrapper>
        
          <div className="logo">
            <div className="logo-img">
              <span
                className="emoji"
                role="img"
                aria-label="balloon"
                aria-hidden="false"
                value="balloon"
              >
              </span>
            </div>
            <span className="logo-title" ><a href="/"><img src={mainLogo} /></a></span>
          </div>
        <ul className="menu-list">
          
          <Link to="/">
            <li className="menu-item">서비스 탐색</li>
          </Link>
          <Link to="/">
            <li className="menu-item">인기서비스</li>
          </Link>
          <Link to="/">
            <li className="menu-item">공유하기</li>
          </Link>
          <Link to="/">
            <li className="menu-item">커뮤니티</li>
          </Link>
          {/* <li className="menu-item">인기 서비스</li> */}
          {user?(
          <Link to="/share">
            <li className="menu-item">공유하기</li>
          </Link>
          ):('')}
          {role=='"[ROLE_ADMIN]"'?(
            <Link to="/grantservice">
            <li className="menu-item">승인하기</li>
          </Link>
          ):('')}
          {/* <li className="menu-item">내 서비스 보기</li> */}
       
        </ul>

        <ul className="login_menu">
          {user ? (
            <li
              className="menu-item"
              style={{ cursor: "pointer" }}
              onClick={onLogout}
            >
              로그아웃
            </li>
          ) : (
            <li
              className="menu-item"
              style={{ cursor: "pointer" }}
              onClick={onClick}
            >
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
const TopNav = styled.nav`
  position: fixed;
  z-index: 10000;
  width: 100%;
  background-color: white;

  & > div {
    display: flex;
    justify-content: flex-start;
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

  .menu-item {
    cursor: pointer;
  }
  .login_menu{
    margin-left:650px;
  }
`;
