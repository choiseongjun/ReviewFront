import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="top-nav">
      <div className="brand">
        <div className="brand-image">
          <span>🎈</span>
        </div>
        <div className="brand-name">WouldYouWeb</div>
      </div>

      <ul className="menu-list">
        <li className="menu-item">서비스 탐색</li>
        <li className="menu-item">인기 서비스</li>
        <li className="menu-item">커뮤니티</li>
        <li className="menu-item">공유하기</li>
      </ul>
      <div className="nav-right">
        <div className="profile">프로필</div>
        <div className="noti">🛎</div>
      </div>
    </nav>
  );
};

export default Navigation;
