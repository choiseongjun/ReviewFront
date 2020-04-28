import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { css } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${palette.teal3};
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${palette.teal3};
  }

  &:active {
    background: ${palette.teal3};
  }

  ${(props) =>
    props.flex &&
    css`
      flex-grow: 1;
      border: 1px solid ${palette.gray5};

      & + & {
        border-left: none;
      }
    `}
`;

const AuthButton = ({ children, onClick, flex }) => (
  <Wrapper onClick={onClick} flex={flex}>
    {children}
  </Wrapper>
);

export default AuthButton;
