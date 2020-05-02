import React from 'react';
import styled from "styled-components";
import Search from '../components/common/Search';

function Service() {
  return (
    <Contents>
      <div className="sub-tit">
        <h2>서비스</h2>
        <Search></Search>
      </div>
    </Contents>
  );
}

export default Service;
const Contents = styled.section`
  max-width:1360px;
  margin:0 auto;
  padding-top:118px;
  .sub-tit {
    display:flex;
    flex-wrap:wrap;
    h2 {
      margin-right:20px;
    }
  }
  h2 {
    font-size:26px;
    line-height:36px;
    color:#171717;
  }
  .select-wrap {
    width:120px;
    height:36px;
    border:1px solid #D1D1D1;
    select {
      width:100%;
      height:100%;
      padding:0 30px 0 10px;
      border:none;
      font-weight: bold;
      border-radius: 0px; /* iOS 둥근모서리 제거 */
      -webkit-appearance: none; /* 네이티브 외형 감추기 */
      -moz-appearance: none;
      appearance: none;
      font-size:16px;
      color:#171717
      option {
      }
    }
  }
  .input-wrap {
    display:flex;
    width:100%;
    margin-top:14px;
    input {
      width:calc(100% - 56px);
      height:56px;
      padding:0 14px;
      border:1px solid #C9C9C9;
      color:#171717;
      &::placeholder {
        color:rgba(#171717 , .6);
      }
    }
    button {
      width:96px;
      height:56px;
      color:#fff;
      font-size:17px;
      line-height:56px;
      background-color:#1AE1CC;
      border:none;
    }
  }
`
 