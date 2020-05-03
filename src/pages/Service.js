import React from 'react';
import styled from "styled-components";
import Search from '../components/common/Search';
import ServiceList from '../components/service/ServiceList';

function Service() {
  const categoryTab = [
    {title:'생산성',active:true,id:0},
    {title:'생활/편의',active:false,id:1},
    {title:'심심풀이',active:false,id:2},
    {title:'건강/운동',active:false,id:3},
    {title:'교육',active:false,id:4},
    {title:'심리건강',active:false,id:5},
    {title:'엔터테이먼트',active:false,id:6},
    {title:'비즈니스',active:false,id:7},
    {title:'금융',active:false,id:8},
    {title:'애완동물',active:false,id:9,}
]
const hashTag = [
  {title:'#여행관련',active:true},
  {title:'#두글',active:false},
  {title:'#세글자',active:false},
  {title:'#네글자요',active:false},
  {title:'#다섯글자요',active:false},
  {title:'#여섯글자요요',active:false},
  {title:'#일곱글자요요요',active:false},
]
// const onToggle = (id) => {
//   console.log(categoryTab[id] , id)
//   categoryTab.map(item => item.id === id ? {...item , active : !item.active} :item)
// }
  return (
    <Contents>
      <Search></Search>
      <CategotyTab>
        <ul>
          {
            categoryTab.map((item, index) =>
              <li key={index} className={item.active === true ? 'active' : ''}>
                <button type="button">{item.title}</button>
              </li>
            )
          }
        </ul>
      </CategotyTab>
      <HashTag>
        <ul>
          {
            hashTag.map((item, index) =>
              <li key={index} className={item.active === true ? 'active' : ''}>
                <button type="button">{item.title}</button>
              </li>
            )
          }
        </ul>
      </HashTag>
      <ServiceList></ServiceList>
    </Contents>
  );
}

export default Service;
const Contents = styled.section`
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
`
const CategotyTab = styled.div`
  padding:10px 0;
  border-bottom:1px solid #D1D1D1;
  ul {
    display:flex;
    flex-wrap:wrap;
    max-width:1360px;
    margin:0 auto;
    li {
      padding:6px 0;
      button {
        font-size:19px;
        color:#CFCFCF;
        border:none;
        background-color:transparent;
        cursor:pointer;
        outline:none;
      }
      + li {
        margin-left:42px;
      }
      &.active {
        padding:6px 17px;
        background-color:#1AE1CC;
        border-radius:14px;
        button {
          font-size:19px;
          color:#171717;
          font-weight: bold;
        }
      }
    }
  }
`
const HashTag = styled.div`
padding:10px 0;
border-bottom:1px solid #D1D1D1;
background-color:#E9E9E9;
ul {
  display:flex;
  flex-wrap:wrap;
  max-width:1360px;
  margin:0 auto;
  li {
    button {
      padding:7px 14px;
      font-size:15px;
      color:#B1B1B1;
      border:1px solid #D1D1D1;
      background-color:#F3F3F3;
      border-radius:16px;
      cursor:pointer;
      outline:none;
    }
    + li {
      margin-left:8px;
    }
    &.active {
      button {
        color:#06C4B0;
        font-weight: 600;
        background-color:#fff;
      }
    }
  }
}
`