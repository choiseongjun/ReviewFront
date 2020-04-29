import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CenterWrapper from '../../components/common/CenterWrapper';
import Button from '../../components/common/buttons/Button';
import { newServices } from '../../data';
import palette from '../../lib/styles/palette';
import { remcalc } from '../../lib/styles/utils';

function NewServiceNav() {
  return (
    <NewServiceBar>
      <CenterWrapper flex>
        <h3>신규 업로드 서비스</h3>

        <NewServiceList>
          {newServices.map((newService, index) => (
            <Link key={index} to={newService.path}>
              <li>{newService.title}</li>
            </Link>
          ))}
        </NewServiceList>

        <Button color="transparent">더보기</Button>
      </CenterWrapper>
    </NewServiceBar>
  );
}

const NewServiceBar = styled.nav`
  padding: 10px;
  border-bottom: 1px solid ${palette.gray2};
  display: flex;
  flex-direction: row;

  ul,
  h3,
  p {
    display: flex;
  }

  h3,
  p {
    font-size: ${remcalc(18)};
    color: ${palette.teal2};
    font-weight: bold;
  }

  h3 {
    margin-right: 2rem;
  }

  li {
    padding-right: ${remcalc(20)};
  }
`;

const NewServiceList = styled.ul`
  margin-right: 2rem;

  li {
    padding: ${remcalc(12)};
    word-break: keep-all;
  }
`;

export default NewServiceNav;
