import { css } from "styled-components";

export const ellipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const calcToRem = (px) => {
  const fontRoot = 16;
  return px / fontRoot;
};

export const remcalc = (px) => `
  ${calcToRem(px)}rem
`;
