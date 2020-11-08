import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { remcalc } from "../../lib/styles/utils";
import CenterWrapper from "../../components/common/CenterWrapper";
import ModalPortal from "../../ModalPortal";
import Modal from "../../containers/auth/ModalContainer";

import mainLogo from '../../asset/servicelist/webplacelogo.png';

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
          
          
            <li className="menu-item"><Link to="/">서비스 탐색</Link></li>
          {/* <Link to="/">
            <li className="menu-item">인기서비스</li>
          </Link> */}
            <li className="menu-item"><Link to="/community">커뮤니티</Link></li>
          {/* <li className="menu-item">인기 서비스</li> */}
          {user?(
            <li className="menu-item"><Link to="/share">공유하기</Link></li>
          ):('')}
          {role=='"[ROLE_ADMIN]"'?(
            <li className="menu-item"><Link to="/grantservice">승인하기</Link></li>
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
  height:80px;
  @media (max-width: 1280px) {
    width:100%;
  }

  & > div {
    display: flex;
    height:100%;
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
  .logo{
    width:138px;
  }
  .logo-title {
    color: ${palette.teal2};
    font-weight: bold;
    font-size: ${remcalc(22)};
    img{
      vertical-align:middle;
    }
  }

  .menu-list {
    font-weight: bold;
    width:calc(100% - 198px);
    padding-left:20px;
    box-sizing:border-box;

    li {
      padding: ${remcalc(27)} ${remcalc(20)};
      cursor: pointer;
    }
  }

  .menu-item {
    cursor: pointer;
    a {
      color:#555;
    }
  }
  .login_menu{
    width:60px;
    display:flex;
    justify-content:flex-end;
  }
`;
