import React from 'react';
import styled from 'styled-components';
import CenterWrapper from '../../components/common/CenterWrapper';
import Card from '../../components/common/Card';
import palette from '../../lib/styles/palette';
import { remcalc } from '../../lib/styles/utils';

function Recommand() {
  return (
    <RecommandPage>
      <CenterWrapper>
        <h2>이번 주 우주웹 추천</h2>
        <span>#금융</span>
        <div className="card-wrap">
          <div className="card-wrap__left">
            <Card inline size="large"></Card>
          </div>
          <div className="card-wrap__right">
            <Card size="medium"></Card>
            <Card size="small"></Card>
          </div>
        </div>
      </CenterWrapper>
    </RecommandPage>
  );
}

const RecommandPage = styled.section`
  padding: 100px 10px;

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

  .card-wrap {
    height: 525px;
    display: flex;

    div {
      flex: auto;
    }

    & > div + div {
      margin-left: 1.5rem;
    }

    .card-wrap__left {
      flex: 3;
    }

    .card-wrap__right {
      flex: 2;
      display: flex;
      flex-direction: column;

      & > div + div {
        margin-top: 1.5rem;
      }

      div:first-child {
        flex: 3;
      }

      div:last-child {
        flex: 2;
      }
    }
  }
`;

export default Recommand;
