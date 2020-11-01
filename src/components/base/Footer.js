import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { remcalc } from "../../lib/styles/utils";
import CenterWrapper from "../../components/common/CenterWrapper";

const FooterWrap = styled.footer`
  background-color: ${palette.gray8};
  color: ${palette.gray2};
  padding-top: 20px;
  height: 160px;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RightArea = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
`;

const ListCorp = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    padding-right: 20px;
    font-size: ${remcalc(14)};
    font-weight: bold;
  }

  li + li {
    padding-left: 20px;
    border-left: 1px solid ${palette.gray2};
  }
`;

const CorpItem = styled.li`
  text-transform: uppercase;
`;

const Sitemap = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  li {
    font-size: ${remcalc(12)};
    font-weight: bold;
    color: ${palette.gray5};
  }

  li + li {
    margin-left: 20px;
  }
`;

const SitemapItem = styled.li``;

const Slogan = styled.h3`
  font-size: ${remcalc(14)};
`;

const Address = styled.p`
  margin-top: 10px;
  font-size: ${remcalc(14)};
  color: ${palette.gray5};
  font-weight: bold;
`;

function Footer() {
  return (
    <FooterWrap>
      <CenterWrapper>
        <LeftArea>
          <ListCorp>
            <CorpItem>ABOUT US</CorpItem>
            <CorpItem>CONTACT</CorpItem>
            <CorpItem>개인정보 보호약관</CorpItem>
          </ListCorp>
          <Sitemap>
            <SitemapItem>서비스 탐색</SitemapItem>
            <SitemapItem>인기 서비스</SitemapItem>
            <SitemapItem>공유하기</SitemapItem>
            <SitemapItem>내 서비스 보기</SitemapItem>
          </Sitemap>
        </LeftArea>
        <RightArea>
          <Slogan>나에게 맞는 서비스를 찾다.</Slogan>
          <Address>
            Webplace
            <br />
            웹플레이스
          </Address>
        </RightArea>
      </CenterWrapper>
    </FooterWrap>
  );
}

export default Footer;
