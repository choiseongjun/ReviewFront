import React from "react";
import styled, { css } from "styled-components";
import palette, { buttonColorMap } from "../../../lib/styles/palette";
import media from "../../../lib/styles/media";
import { remcalc } from "../../../lib/styles/utils";

const ButtonBlock = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold; 
  cursor: pointer;
  outline: none;
  color: white;
  border: none;
  background: ${(props) => buttonColorMap[props.color].background};
  color: ${(props) => buttonColorMap[props.color].color};
  &:hover,
  &:focus {
    background: ${(props) => buttonColorMap[props.color].hoverBackground};
    color: ${(props) => buttonColorMap[props.color].hoverColor};
  }
  border-radius: 14px;
  padding-top: 0;
  padding-bottom: 0;
  line-height: 100%;
  ${(props) =>
    props.inline &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}

  ${(props) =>
    props.responsive &&
    css`
      ${media.small} {
        height: 1.5rem;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
        font-size: 0.75rem;
      }
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `}

    ${(props) =>
      props.size === "large" &&
      css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `}

    ${(props) =>
      props.size === "xlarge" &&
      css`
        height: ${remcalc(40)};
        padding-left: ${remcalc(30)};
        padding-right: ${remcalc(30)};
        & + & {
          margin-left: ${remcalc(16)};
        }
        font-size: ${remcalc(20)};
      `}

    ${(props) =>
      props.size === "big" &&
      css`
        width: ${remcalc(260)};
        height: ${remcalc(50)};
        & + & {
          margin-left: ${remcalc(18)};
        }
        font-size: ${remcalc(16)};
      `}

    ${(props) =>
      props.size === "long" &&
      css`
        height: ${remcalc(40)};
        padding-left: ${remcalc(50)};
        padding-right: ${remcalc(50)};
        & + & {
          margin-left: ${remcalc(16)};
        }
        font-size: ${remcalc(16)};
      `}

    ${(props) =>
      props.border &&
      css`
        border: 1px solid ${palette.gray2};
      `}

    ${(props) =>
      props.weight === "normal" &&
      css`
        font-weight: normal;
      `}

    ${(props) =>
      props.fullwidth &&
      css`
        width: 100%;
        height: ${remcalc(50)};
        border-radius: 0;
      `}

    &:disabled {
      cursor: not-allowed;
      background: ${palette.gray3};
      color: ${palette.gray5};
      &:hover {
        background: ${palette.gray3};
        color: ${palette.gray5};
      }
    }
`;

const Button = ({
  children,
  ref,
  color = "teal",
  inline,
  size = "medium",
  border,
  weight,
  responsive = false,
  type,
  ...rest
}) => {
  const htmlProps = rest;
  return (
    <ButtonBlock
      color={color}
      inline={inline}
      size={size}
      border={border}
      weight={weight}
      responsive={responsive}
      {...htmlProps}
      type={type}
      onClick={(e) => {
        console.log("btnclick");
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        e.target.blur();
      }}
    >
      {children}
    </ButtonBlock>
  );
};

export default Button;
