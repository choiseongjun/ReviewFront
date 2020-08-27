import React, { useState, useEffect,useCallback } from "react";
import styled from "styled-components";
import Search from "../components/common/Search";
import ServiceList from "../components/service/ServiceList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { initalizeWebList } from "../modules/weblist";
import Pagination from "react-js-pagination";
import './Services.css';
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
      .get("http://49.50.173.236:8080/web/category")
      .then(function (data) {
        setCategory(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
      dispatch(initalizeWebList(number,"All",""));
      
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
  padding-top: 108px;
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
    
    li {
      display: inline-block;
      margin: 0 3px;
      a {
        color: #333;
      }
    }

    li.active a {
      color: blue;
    }
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
