import React from 'react'
import styled from 'styled-components'

function ServiceList() {
    const list = [
        {
            title:'밑줄 그을때 "Highlight"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'혼자 떠나고 싶을때 "해변 사랑"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'밑줄 그을때 "Highlight"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'혼자 떠나고 싶을때 "해변 사랑"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'밑줄 그을때 "Highlight"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'혼자 떠나고 싶을때 "해변 사랑"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'밑줄 그을때 "Highlight"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
        {
            title:'혼자 떠나고 싶을때 "해변 사랑"',
            company : '주식회사',
            view :100,
            vote : 100,
            img:'../../asset/img/img_test.png'
        },
    ]
    return (
        <ListWrap>
            <div className="inner">
                <div className="sort-wrap">
                    <button type="button">분류별</button>
                    <button type="button">관심 순으로</button>
                </div>
                <ul>
                    {
                        list.map((item,index) => 
                            <li>
                                <span className="pic">
                                    <img src={item.img} alt=""/>
                                </span>
                                <div className="info">
                                <strong className="title">{item.title}</strong>
                                    <span className="writer">{item.company}</span>
                                    <div className="right">
                                        <p className="view"><span>{item.view}</span> view</p>
                                        <p className="vote"><span>{item.vote}</span> vote</p>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </ListWrap>
    )
}

export default ServiceList

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
`
