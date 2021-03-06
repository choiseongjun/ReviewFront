import React, {useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { initalizeWebList } from "../../modules/weblist";
import { Link } from "react-router-dom";
import {BeatLoader} from 'react-spinners';
import { css } from "@emotion/core";
import './ServiceList.css';

const override = css`
  display: flex;
  padding-left:50%;
`;
function ServiceList({servicelist}) {
  
 
  const dispatch = useDispatch();
  const { weblist,totalElements,totalPages,size,number } = useSelector(({ weblist }) => ({
    weblist: weblist.weblist,
    totalElements:weblist.totalElements,
    totalPages:weblist.totalPages,
    size:weblist.size,
    number:weblist.number+1,
  }));
  
  const [activepage, setActivePage] = useState({number});
  // useEffect(() => {
  //   dispatch(initalizeWebList(number));
  // }, [dispatch]);
  // handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   //this.setState({activePage: pageNumber});
  // }
 
  
  return (
    <>
    <ListWrap>
      <div className="inner">
        {/* <div className="sort-wrap">
          <button type="button">분류별</button>
          <button type="button">관심 순으로</button>
        </div> */}
        {weblist && weblist.length > 0 ? (
          <ul>
            {weblist.map((item, index) => (
                <li>
                  <Link to={"/serviceDetail/" + item.id}>
                  <span className="pic">
                    <img
                      src={
                        item.file_name == null
                          ? require("../../asset/img/img_test.png")
                          : "http://49.50.173.236:8080/getWebImage/" + item.file_name
                      }
                      width="100%"
                      height="200"
                      alt={item.content}
                    />
                  </span>
                  <div className="info">
                    <strong className="title">{item.title}</strong>
                    <span className="writer"></span>
                    {/* <div className="right">
                      <p className="view">
                        <span></span> 9999view
                      </p>
                      <p className="vote">
                        <span></span> 300vote
                      </p>
                    </div> */}
                  </div>
                  </Link>
                </li>
            ))}
          </ul>
        ):<BeatLoader css={override} size={20} color="#3F51F5" loading  />}
      </div>
    </ListWrap>
   
      {/* <Pagination
        activePage={setActivePage}
        itemsCountPerPage={size}
        totalItemsCount={totalElements}
        pageRangeDisplayed={totalPages}
        onChange={handlePageChange.bind(this)}
    /> */}
    {/* https://material-ui.com/api/pagination/ */}
    
     
   
  </>
  );
}

export default ServiceList;

const ListWrap = styled.div`
    padding:60px 0;
    
    .inner {
        max-width:1400px;
        margin:0 auto;
    }
    ul {
        display:flex;
        flex-wrap:wrap;
        margin:-20px 0 0 -28px;

        @media (max-width: 1280px) {
          margin: -20px auto 0;
        }
        li {
            @media (max-width: 1280px) {
              width: calc(50% - 10px);margin: 20px 20px 0 0;
            }
            width: calc(25% - 28px);
            margin:20px 0 0 28px;
            &:nth-child(2n) {
              margin-right: 0;
            }
            .info {
                display:flex;
                flex-wrap:wrap;
                padding:13px 18px;
                background-color:#fff;
                width:100%;
                .right {
                    margin-left:auto;
                    display:flex;
                    p {
                        padding-left:20px;
                        font-size:9px;
                        line-height:13px;
                        color:#171717;
                        &.view {
                            background:url(../../asset/img/icon_view.png) no-repeat left center;
                        }
                        span {
                            margin-right:2px;
                            color:#707070;
                        }
                        + p{
                            margin-left:7px;
                        }
                    }
                }
            }
            .title {
                display:inline-block;
                width:100%;
                margin-bottom:8px;
                font-size:14px;
                line-height:20px;
                color:#171717;
                font-weight:600;
            }
            .writer{
                padding-left:24px;
                display:inline-block;
                color:#6E6E6E;
                font-size:10px;
            }
        }
    }
    .sort-wrap{
        display:flex;
        justify-content: flex-end;
        button {
            position:relative;
            padding-right:23px;
            font-size:14px;
            line-height:20px;
            color:#474747;
            border:none;
            background:none;
            font-weight:bold;
            &::after {
              position:absolute;
              right:0;
              top:50%;
              display:block;
              content:"";
              border-top: 12px solid #b7b7b7;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              transform: translateY(-50%);
            }
            + button {
                margin-left:26px;
            }
        }
  
`;
