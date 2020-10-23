import React, { useState, useEffect,useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "react-js-pagination";
import { useSelector, useDispatch } from "react-redux";
import { initalizeWebList } from "../../modules/weblist";

function GrantService() {

    const [weblist,setWeblist] = useState([]);
    const [totalElements,setTotalElements]=useState(0);
    const [totalPages,setTotalPages]=useState(0);
    const [size,setSize]=useState(0);
    const [number,setNumber]=useState(0);
    const [appYn,setAppYn]=useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
      axios.get("http://49.50.173.236:8080/web/serviceList/All")
      .then(({ data }) => {
        setWeblist(data.weblists.content);
       
        setTotalElements(data.weblists.totalElements)
        setTotalPages(data.weblists.setTotalPages)
        setSize(data.weblists.size);
        setNumber(data.weblists.number);
        
      })
    },[]);

    function waitGrant(){
      axios.get("http://localhost:8080/web/serviceList/All?appYn=N")
      .then(({ data }) => {
        setWeblist(data.weblists.content);
        setTotalElements(data.weblists.totalElements)
        setTotalPages(data.weblists.setTotalPages)
        setSize(data.weblists.size);
        setNumber(data.weblists.number+1);
        setAppYn(false);
      })
    };
    function completeGrant(){
      axios.get("http://49.50.173.236:8080/web/serviceList/All?appYn=Y")
      .then(({ data }) => {
        setWeblist(data.weblists.content);
        setTotalElements(data.weblists.totalElements)
        setTotalPages(data.weblists.setTotalPages)
        setSize(data.weblists.size);
        setNumber(data.weblists.number+1);
        setAppYn(true);
        
      })
    }
    const handlePageChange = useCallback(
      (mcode,appYn,pageNumber) => {
        console.log(appYn)
        if(appYn===true){
          axios.get("http://49.50.173.236:8080/web/serviceList/All?page="+pageNumber+"&appYn=Y")
          .then(({ data }) => {
            setWeblist(data.weblists.content);
            setTotalElements(data.weblists.totalElements)
            setTotalPages(data.weblists.setTotalPages)
            setSize(data.weblists.size);
            setNumber(data.weblists.number+1);
          })
        }else{
          axios.get("http://49.50.173.236:8080/web/serviceList/All?page="+pageNumber)
          .then(({ data }) => {
            console.log(data.weblists)
            setWeblist(data.weblists.content);
            setTotalElements(data.weblists.totalElements)
            setTotalPages(data.weblists.setTotalPages)
            setSize(data.weblists.size);
            setNumber(data.weblists.number+1);
          })
        }
        //axios.get("http://localhost:8080/web/serviceList/All?page=2&appYn=Y")
      },[])
      // const AppYn = useCallback(
      //   (item) => {
      //     console.log(item) 
      //   },
      //   [],
      // )
      // function AppYn = useCallback(
      //   (item)=>{
      //     console.log("item222"+item)
        
      //  },[])
      // (item){
      //   console.log("item222"+item)
      // }
      /*바로 삭제하는 로직 추가해야함..08-05 */
      function applyYn(e,id){
        
        e.preventDefault();
        console.log(e.target.value)
        // const target = e.target.value;
        // var element = document.getElementById("tablelist");
        // console.log(element.childNodes)
        //     element.parentNode.removeChild(element);
        const token = JSON.parse(sessionStorage.getItem("user"));
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.delete("http://49.50.173.236:8080/web/appyn/"+id,
          config)
        .then(({ data }) => {
          
          if(data.success==="success"){
            // var element = document.getElementById("tablelist");
            // element.parentNode.removeChild(element);
            alert('승인에 성공하였습니다');
          }else{
            alert('승인에 실패하였습니다');
          }
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
                  {weblist.map((item,index) => (
                  <tr id="tablelist">
                      <>
                        <td>{`년월=`+item.createdAt.toString().substring(0,10)+`시간=`+item.createdAt.toString().substring(11,20)}</td>
                        <td id="tablelist"><img
                            src={
                              item.file_name == null
                                ? require("../../asset/img/img_test.png")
                                : "http://49.50.173.236:8080/getWebImage/" + item.file_name
                            }
                            width="50"
                            height="50"
                            alt={item.content}
                          />{item.title}{item.appyn==='N'?<button value={index} onClick={(e) => applyYn(e, item.id)}>승인하기</button>:''}</td>
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
          <Pagination
          activePage={number}
          itemsCountPerPage={size}
          totalItemsCount={totalElements}
          pageRangeDisplayed={totalPages}
          onChange={handlePageChange.bind(this,"All",appYn)}
        />
        </Contents>
    )
}
const Contents = styled.section`
  padding-top:105px;
  
  .fr {
    float: right;
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
`
const BoldText = styled.span`
  font-weight: bold;
  font-size: 15px;
`
export default GrantService;
