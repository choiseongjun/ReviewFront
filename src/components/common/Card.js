import React from 'react';
import { css } from 'styled-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { remcalc } from '../../lib/styles/utils';
import media from '../../lib/styles/media';

const CardBlock = styled.div`
  display: flex;
  background: #0c0;

  ${(props) =>
    props.size === 'small' &&
    css`
      flex: 1;
      height: 290px;
      flex-direction: column;
      height: ${remcalc(40)};
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      flex: 1;
      height: 290px;
      flex-direction: column;
    `}

    ${(props) =>
      props.size === 'large' &&
      css`
        height: 100%;
        flex: 2;
      `}

  div.img-area {
    width: 100%;
    height: 70%;
    background: #cc0;
  }
`;

function Card({ size, children }) {
  return (
    <CardBlock size={size}>
      <div className="img-area">
        <img></img>
      </div>
      <div className="txt-area"></div>
      {children}
    </CardBlock>
  );
}

export default Card;
