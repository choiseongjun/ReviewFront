import React,{ useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

function GrantService() {

    const [weblist,setWeblist] = useState([])
    useEffect(() => {
      axios.get("http://localhost:8080/web/serviceList/All")
      .then(({ data }) => {
        setWeblist(data.weblists.content);
        console.log(data.weblists)
      })
    },[]);

    function waitGrant(){
      axios.get("http://localhost:8080/web/serviceList/All")
      .then(({ data }) => {
        setWeblist(data.weblists.content);
        console.log(data.weblists)
      })
    };
    function completeGrant(){
      axios.get("http://localhost:8080/web/serviceList/All?appYn=Y")
      .then(({ data }) => {
        setWeblist(data.weblists.content);
        console.log(data.weblists)
      })
    }

    return (
        <Contents>
          <div id="container">
            <div className="Top" style={{marginLeft:350}}>
            <h1>서비스승인페이지</h1>
            <span onClick={waitGrant}><BoldText>승인대기</BoldText></span>
            <span onClick={completeGrant} style={{display:'inline-block',marginLeft:15}}><BoldText>승인완료</BoldText></span>
            </div>
            <div>
            <table style={{width:"100%"}}>
              <thead style={{backgroundColor:"#EFEFEF",marginTop:50}}>
                <tr>
                  <th width="25%">등록날짜</th>
                  <th width="50%">서비스이름</th>
                  <th width="25%">작성자</th>
                </tr>                
              </thead>
              <tbody>
              {weblist && weblist.length > 0 && (       
                  <>
                  {weblist.map((item, index) => (
                  <tr>
                      <>
                        <td>{`년월=`+item.createdAt.toString().substring(0,10)+`시간=`+item.createdAt.toString().substring(11,20)}</td>
                        <td><img
                            src={
                              item.file_name == null
                                ? require("../../asset/img/img_test.png")
                                : "http://52.79.57.173/getWebImage/" + item.file_name
                            }
                            width="50"
                            height="50"
                            alt={item.content}
                          />{item.title}{item.appyn=='N'?<button>승인하기</button>:''}</td>
                        <td>{item.user.email}</td>
                      </>
                  </tr>
                  ))}
                  </>         

                )}  
              </tbody>
            </table>
            </div>
          </div>
        </Contents>
    )
}
const Contents = styled.section`
  padding-top:105px;
  
  .fr {
    float: right;
  }
`
const BoldText = styled.span`
  font-weight: bold;
  font-size: 15px;
`
export default GrantService;
