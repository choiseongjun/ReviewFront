import React from "react";
import Navigation from "../../components/Navigation";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Navigation />
      <section className="header">
        <div className="section-body">
          <div className="header-title">우주웹 Would you Web?</div>
          <div className="header-text">
            자신에게 필요한 서비스를 찾아보세요{" "}
          </div>
        </div>
      </section>
      <section className="theme-nav">
        <div className="section-body">
          <ul>
            <li>금융은 토스닷</li>
            <li>금융은 토스닷</li>
            <li>금융은 토스닷</li>
            <li>금융은 토스닷</li>
            <li>금융은 토스닷</li>
          </ul>
        </div>
      </section>
      <section className="recomand">
        <div className="section-body">
          <div className="section-title">이번 주 우주웹 추천</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
