import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initalizeWebList } from "../../modules/weblist";
import { Link } from "react-router-dom";

function ServiceList() {
  //const [serviceweblist,setServiceweblist] =useSelector(state => console.log(state));
  const dispatch = useDispatch();
  // const { weblist } = useSelector(({ weblist }) => ({
  //     weblist: weblist,
  //   }));

  const { weblist } = useSelector(({ weblist }) => ({
    weblist: weblist.weblist,
  }));
   console.log(weblist);
  useEffect(() => {
    dispatch(initalizeWebList());

    // axios.get('http://localhost:8080/web/service')
    // .then(function (data) {
    //     console.log(data.data.content)
    //     setWeblist(data.data.content);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  }, []);

  return (
    <ListWrap>
      <div className="inner">
        <div className="sort-wrap">
          <button type="button">분류별</button>
          <button type="button">관심 순으로</button>
        </div>
        {weblist && weblist.length > 0 && (
          <ul>
            {weblist.map((item, index) => (
              <Link to={"/serviceDetail/" + item.id}>
                <li>
                  <span className="pic">
                    <img
                      src={
                        item.file_name == null
                          ? require("../../asset/img/img_test.png")
                          : "http://52.79.57.173/getWebImage/" + item.file_name
                      }
                      width="320"
                      height="200"
                      alt={item.content}
                    />
                  </span>
                  <div className="info">
                    <strong className="title">{item.title}</strong>
                    <span className="writer"></span>
                    <div className="right">
                      <p className="view">
                        <span></span> view
                      </p>
                      <p className="vote">
                        <span></span> vote
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </ListWrap>
  );
}

export default ServiceList;

const ListWrap = styled.div`
    padding:60px 0;
    background-color:#F3F3F3;
    .inner {
        max-width:1360px;
        margin:0 auto;
    }
    ul {
        display:flex;
        flex-wrap:wrap;
        margin:-20px 0 0 -28px;
        li {
            width: calc(25% - 28px);
            margin:20px 0 0 28px;
            .info {
                display:flex;
                flex-wrap:wrap;
                padding:13px 18px;
                background-color:#fff;
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
