import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const Wrapper = styled.div`

  display: flex;

  ${(props) =>
    props.step === "1" &&
    css`
      div:nth-child(1),
      div:nth-child(1)::before {
        background: ${palette.teal2};
      }
    `}

  ${(props) =>
    props.step === "2" &&
    css`
      div:nth-child(1),
      div:nth-child(1)::before,
      div:nth-child(2),
      div:nth-child(2)::before {
        background: ${palette.teal2};
      }
    `}

  ${(props) =>
    props.step === "3" &&
    css`
      div,
      div::before {
        background: ${palette.teal2};
      }
    `}

    div + div {
      margin-left: 30px;
    }
`;

const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${palette.gray2};
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background: ${palette.gray2};
    position: relative;
    top: 50%;
    left: -30px;
  }

  &:first-child::before {
    display: none;
  }
`;

function ProgressIcon({ step }) {
  return (
    <Wrapper step={step}>
      <Circle />
      <Circle />
      <Circle />
    </Wrapper>
  );
}

export default ProgressIcon;
