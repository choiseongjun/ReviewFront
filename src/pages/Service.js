import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import Search from '../components/common/Search';
import ServiceList from '../components/service/ServiceList';
import axios from 'axios';
import MainVisual from "../components/home/MainVisual";

function Service() {
  const [category, setCategory] = useState([]);
  const [subcategory,setSubcategory] = useState([]);
  const [active,setActive] = useState("");
  useEffect(() => {
    axios.get('http://localhost:8080/web/category')
    .then(function (data) {
      setCategory(data.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);
let check = new Boolean(true);
function activateLasers(item) {
  console.log()
  
  console.log(item)
  
  if(check==true){
    item.active=true;
    setActive("true");
    check=false;
  }else{
    item.active=false;
    setActive("false");
    check=true;
  }
}
function smallCategory(item) {
  setSubcategory(item.subCategory);
}
function serviceList(item){
  console.log(item)
}
  return (
    <>
    <MainVisual />
      <Contents>
        
        <CategotyTab>
          <ul>
            {
              category.map((item, index) =>
                <li onClick={activateLasers.bind(this, item)} key={index} className={item.active === true ? 'active' : ''}>
                  <button type="button" onClick={smallCategory.bind(this, item)} >{item.name}</button>
                </li>
              )
            }
          </ul>
        </CategotyTab>
        <HashTag>
            <ul>
            {
              
              subcategory.map((item, index) =>
                  <li key={index}  className={item.active === true ? 'active' : ''}> 
                    <button type="button" onClick={serviceList.bind(this, item)}>{item.name}</button>
                  </li>
              )
            }
            </ul>
          </HashTag>
        <ServiceList></ServiceList>
      </Contents>
    </>
  );
}

export default Service;
const Contents = styled.section`
  padding-top:18px;
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