import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { remcalc } from '../../lib/styles/utils';

const Aligner = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  padding: 0 15px;

  color: ${palette.gray6};

  &:hover {
    color: ${palette.gray7};
  }

  & + & {
    border-left: 1px solid ${palette.gray6};
  }
`;

const AlignedLink = ({ to, children }) => (
  <Aligner>
    <StyledLink to={to}>{children}</StyledLink>
  </Aligner>
);

export default AlignedLink;
