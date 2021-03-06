import React, { useState, useEffect,useCallback } from "react";
import styled from "styled-components";
import Search from "../components/common/Search";
import ServiceList from "../components/service/ServiceList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { initalizeWebList } from "../modules/weblist";
import Pagination from "react-js-pagination";
import './Services.css';

import servicelistBanner from '../asset/servicelist/home_banner.png';
function Service() {
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const dispatch = useDispatch();

  const { weblist,totalElements,totalPages,size,number,mcode } = useSelector(({ weblist }) => ({
    weblist: weblist.weblist,
    totalElements:weblist.totalElements,
    totalPages:weblist.totalPages,
    size:weblist.size,
    number:weblist.number+1,
    mcode:weblist.mcode
  }));

  useEffect(() => {
    axios
      .get("/web/category")
      .then(function (data) {
        setCategory(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      if(mcode==="All" || mcode===undefined){
        dispatch(initalizeWebList(number,"All",""));
      }else{
        dispatch(initalizeWebList(number,mcode,""));
      }
      
      
  }, []);
 
  function activateLasers(item) {
    setSelectedCategory(item.id)
    setSelectedSubCategory('')//메뉴 바꿀때마다 초기화
  }
 
  function activateSubLasers(index, item) {//하위카테고리 hover 작동
    setSelectedSubCategory(index)
  }
  function smallCategory(item) {
    setSubcategory(item.subCategory);
  }
  
  const serviceList = useCallback(
    (item) => {
      dispatch(initalizeWebList(1,item,""));
      //dispatch(initalizeWebList(number,"All"));
  },[])
  //페이지네이션 버튼누를때마다 바뀌는것
  const handlePageChange = useCallback(
    (mcode,pageNumber) => {
      dispatch(initalizeWebList(pageNumber,mcode,""));
    },[])

  
  return (
    <Contents>
      <Banner> 
        <div className="service_img">
          <div className="service_img_text">
            <strong>인터넷 사이트, 모바일 앱</strong> <br />
            웹플레이스에서 쉽게 찾아보세요!
          </div>
        </div>        
      </Banner>
      <Search number={number}></Search>
      <CategotyTab>
        <ul>
          {category.map((item, index) => (
            <li
              onClick={activateLasers.bind(this, item)}
              key={index}
              className={item.id === selectedCategory ? "active" : ""}
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
            <li 
                onClick={() => activateSubLasers(index, item)} 
                key={item.id} 
                className={index === selectedSubCategory ? "active" : ""}>
              <button type="button" onClick={serviceList.bind(this,item.mcode)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </HashTag>
        <ServiceList 
          weblist={weblist}
        />
      <Pagination
          activePage={number}
          itemsCountPerPage={size}
          totalItemsCount={totalElements}
          pageRangeDisplayed={totalPages}
          onChange={handlePageChange.bind(this,mcode)}
        />
      
    </Contents>
  );
}

export default Service;


const Contents = styled.section`
  padding-top:80px;
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
  .pagination {
    margin-left: calc(50% - 100px);
    @media (max-width: 1280px) {
      display:flex;
      margin-left:10px;
      width:100%;
    }
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #333;
      }
    }

    li.active a {
      color: blue;
    }
    
  }
`;
const Banner = styled.div`
  
  
  .service_img{
    
    width:100%;
    height:475px;
    background: #ddd url(${servicelistBanner}) no-repeat center/cover;
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    .service_img_text{
      display:none;
    }
    @media (max-width: 1280px) {
      width:100%;
      background:#054FA7;
      height:78px;
      .service_img_text{
        display:block;
        position:absolute;
        top: 18px;
        left: 16px;
        color:#FFF;
        
      }
    }
  }
  
`
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
        background-color: #3F51F5;
        border-radius: 14px;
        button {
          font-size: 19px;
          color: #fff;
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
          color: #3F51F5;
          font-weight: 600;
          background-color: #fff;
        }
      }
    }
  }
`;
