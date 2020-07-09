import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../components/common/Search";
import ServiceList from "../components/service/ServiceList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { initalizeWebList } from "../modules/weblist";

function Service() {
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [active, setActive] = useState("");
  
  const dispatch = useDispatch();

  const { weblist,totalElements,totalPages,size,number } = useSelector(({ weblist }) => ({
    weblist: weblist.weblist,
    totalElements:weblist.totalElements,
    totalPages:weblist.totalPages,
    size:weblist.size,
    number:weblist.number+1,
  }));
  let mCode="All";
  useEffect(() => {
    axios
      .get("http://52.79.57.173/web/category")
      .then(function (data) {
        console.log(data.data)
        setCategory(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
     
      dispatch(initalizeWebList(number,"All"));
  }, [dispatch]);
 
  let clickNumber=1;
  let clickSubNumber=1;
  function activateLasers(item) {
    
    if(clickNumber==1){
      clickNumber++;
      item.active = true;
      setActive("true");
    }else{
      clickNumber--;
      item.active = false;
      setActive("false");
    }
  }
 
  function activateSubLasers(e,item) {

  
    if(clickSubNumber==1){
      clickSubNumber++;
      item.active = true;
      setActive("true");
    }else{
      clickSubNumber--;
      item.active = false;
      setActive("false");
    }
  }
  function smallCategory(item) {
    
    setSubcategory(item.subCategory);
    
  }
  
  //카테고리코드값 들고와서 카테고리별 리스트 뽑아오는 함수
  function serviceList(item) {
    mCode=item;
    console.log("mCode?????"+mCode)
    dispatch(initalizeWebList(number,item));
  }
  
  return (
    <Contents>
      <Search></Search>
      <CategotyTab>
        <ul>
          {category.map((item, index) => (
            <li
              onClick={activateLasers.bind(this, item)}
              key={index}
              className={item.active === true ? "active" : ""}
            >
              <button type="button" onClick={smallCategory.bind(this, item)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </CategotyTab>
      <HashTag>
        <ul>
          {subcategory.map((item, index) => (
            <li onClick={activateSubLasers.bind(this, item)}
                key={index} 
                className={item.active === true ? "active" : ""}>
              <button type="button" onClick={serviceList.bind(this,item.mcode)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </HashTag>
      <ServiceList 
        mCode={mCode}
      />
    </Contents>
  );
}

export default Service;
const Contents = styled.section`
  padding-top: 118px;
  .sub-tit {
    display: flex;
    flex-wrap: wrap;
    h2 {
      margin-right: 20px;
    }
  }
  h2 {
    font-size: 26px;
    line-height: 36px;
    color: #171717;
  }
`;
const CategotyTab = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #d1d1d1;
  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 1360px;
    margin: 0 auto;
    li {
      padding: 6px 0;
      button {
        font-size: 19px;
        color: #cfcfcf;
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
      }
      + li {
        margin-left: 42px;
      }
      &.active {
        padding: 6px 17px;
        background-color: #1ae1cc;
        border-radius: 14px;
        button {
          font-size: 19px;
          color: #171717;
          font-weight: bold;
        }
      }
    }
  }
`;
const HashTag = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #d1d1d1;
  background-color: #e9e9e9;
  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 1360px;
    margin: 0 auto;
    li {
      button {
        padding: 7px 14px;
        font-size: 15px;
        color: #b1b1b1;
        border: 1px solid #d1d1d1;
        background-color: #f3f3f3;
        border-radius: 16px;
        cursor: pointer;
        outline: none;
      }
      + li {
        margin-left: 8px;
      }
      &.active {
        button {
          color: #06c4b0;
          font-weight: 600;
          background-color: #fff;
        }
      }
    }
  }
`;
