import React from 'react';
import styled, { css } from 'styled-components';
import media from '../../lib/styles/media';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `}

  ${(props) =>
    props.flex === 'column' &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.flex === 'space-between' &&
    css`
      justify-content: space-between;
    `}

  ${media.small} {
    max-width: calc(100% - 2rem);
  }
`;

function CenterWrapper({ flex, children }) {
  return <Wrapper flex={flex}>{children}</Wrapper>;
}

export default CenterWrapper;
