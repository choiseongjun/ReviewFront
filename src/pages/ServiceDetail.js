import React ,{useState,useSelector} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import ServiceDetail from '../components/service/ServiceDetail';
import Reply from '../components/service/Reply';
import Axios from "axios";
import Pagination from "react-js-pagination";

export default function ({match}) {

  const serviceDetail = ServiceDetail(match.params.id);
  const AllReply = Reply(match.params.id);
  
  let sortReply = [].concat(AllReply?.webreply ?? []).sort(function(a,b) {
    if(b['parent'] == a['parent']) return a['id'] - b['id'];
    else return b['parent'] - a['parent']; 
  });
  const [activePage, setActivePage] = useState(1);
  const userId = JSON.parse(sessionStorage.getItem("user")) && JSON.parse(atob(JSON.parse(sessionStorage.getItem("user")).split(".")[1])).sub;
  const itemsCountPerPage = 10;
  let reply = sortReply.slice((activePage - 1) * itemsCountPerPage, (activePage - 1) * itemsCountPerPage + itemsCountPerPage);
  console.log(reply);
  function shareBtnHandler() {
    alert("공유하기는 미구현입니다.");
  }
 
  function bellBtnHandler() {
    alert("알람은 미구현입니다.");
  }

  function mobileBtnHandler() {
    alert("모바일은 미구현입니다.");
  }

  function pcBtnHandler() {
    
    if(serviceDetail.url){
      window.open(serviceDetail.url)
    }else{
      alert("PC는 미구현입니다.");
    }
    
  }
  
  function startClickHandler() {
    let target = window.event.target;
    let idx = window.event.target.dataset.idx;
    console.log("in!")
    if(!target.closest(".modify") && !target.closest("#re_reply") ) return;
    console.log("in")
    target.parentNode.childNodes.forEach(function(v, i) {
      if(v.dataset.idx <= idx) {
        v.className = "active";
      } else {
        v.className = "";
      }

    });
  }
  function nextImageHandler(e) {
    let element = document.getElementById("service_img_list");
    let children = element.childNodes;
    let scrollLeft = element.scrollLeft;
    if(element.scrollWidth <= element.offsetWidth + scrollLeft) {
      element.scroll({top: 0, left: 0, behavior: 'smooth' });
    } else {
      let left = 0;
      children.forEach(function(v, i) {
        if(v.offsetLeft == Math.round(scrollLeft)) {
          left = left || children[i+1].offsetLeft;
        }
      });
      element.scroll({top: 0, left: left, behavior: 'smooth' });
    }
  }
  
  function preImageHandler(e) {
    let element = document.getElementById("service_img_list");
    let children = element.childNodes;
    let scrollLeft = element.scrollLeft;
    if(scrollLeft == 0) {
      element.scroll({top: 0, left: element.scrollWidth, behavior: 'smooth' });
    } else {
      let left = 0;
      children.forEach(function(v, i) {
        if(v.offsetLeft < Math.ceil(scrollLeft)) {
          left = v.offsetLeft;
        }
      });
      element.scroll({top: 0, left: left, behavior: 'smooth' });
    }
  }

  function addReview(e) {
    e.preventDefault(); 
    if(document.querySelectorAll("#star_wrap>.active").length === 0){
      alert('별점을 체크해주세요!');
      return;
    }
    const token = JSON.parse(sessionStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let webReplyReq={};
    webReplyReq.content = document.getElementById("reply_text").value;
    webReplyReq.weblist_id=match.params.id;
    webReplyReq.star = document.querySelectorAll("#star_wrap>.active").length;
    (async (e) => {
      try {
        const { data } = await Axios.post(
          "http://49.50.173.236:8080/web/reply",
          webReplyReq,
          config,
        );
        alert("등록되었습니다.");
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    })();
    return false;
  }

  function replyModify(e, id) {
    e.target.parentNode.parentNode.parentNode.className = "modify";
    let target = e.target.parentNode.parentNode.nextElementSibling.children[0];
    if(target.tagName == "P") {
      let input = document.createElement("input")
      input.type = "text";
      input.value = target.innerText;
      target.parentNode.append(input);
      target.remove();
      return;
    }
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let webReplyReq={};
    webReplyReq.content = target.value;
    webReplyReq.id=id; 
    webReplyReq.star = document.querySelectorAll(`#reply_wrap li[data-id='${id}'] .star-wrap span.active`).length;
    (async (e) => {
      try {
        const { data } = await Axios.put(
          "http://49.50.173.236:8080/web/reply/",
          webReplyReq,
          config,
        );
        alert("수정되었습니다.");
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    })();
    return false;
  }

  function replyDelete(e, id) {
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    (async (e) => {
      try {
        const { data } = await Axios.delete(
          "http://49.50.173.236:8080/web/reply/"+id,
          config,
        );
        alert("삭제되었습니다.");
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    })();
    return false;
  }

  function reReply(e, id) {
    let html = document.querySelectorAll('#replyContent')[0].innerHTML;
    let div = document.createElement("DIV");
    e.target.closest("li").append(div);
    div.id = "re_reply";
    div.innerHTML = html;
    div.getElementsByTagName("h5")[0].innerText = "댓글 달기";
    div.querySelectorAll("#star_wrap")[0].addEventListener("click", startClickHandler);
    div.getElementsByTagName("button")[0].addEventListener("click", function() {
      addReReply(id, div.querySelectorAll("#reply_text")[0].value, div.querySelectorAll(`#star_wrap span.active`).length)
    }, false);
  }
  
  function addReReply(id, content, star) {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let webReplyReq={};
    webReplyReq.content = content;
    webReplyReq.weblist_id=match.params.id;
    webReplyReq.star = star;
    (async (e) => {
      try {
        const { data } = await Axios.post(
          "http://49.50.173.236:8080/web/webreply/" + id,
          webReplyReq,
          config,
        );
        alert("등록되었습니다.");
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    })();
    return false;
  }

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  return (
    <Contents>
      <Container>
        <ContentHeader>
          <span className="title">서비스 소개</span>
          <Link to={"/"}>
            <span className="back-btn">목록으로</span>
          </Link>
        </ContentHeader>
        <ContentTop>
          <Subject>
            <div className="subject-header">
              <span className="subject-header-title">생산성 &gt; 길찾기</span>
            </div>
            <div className="content-wrap">
              <div className="image-wrap">
                <img src={"http://49.50.173.236:8080/getWebImage/" + serviceDetail.file_name}></img>
              </div>
              <div className="container">
                <div className="content-header">
                  <h3>{serviceDetail.title}</h3>
                  {/* <span>with {serviceDetail.user.name}</span> */}
                </div>
                <div className="state">
                  <img src="/image/iconmonstr-star-3-240.png"></img>
                  <span>별점 {serviceDetail.avgstar?.toFixed(1) || 0}개 ({serviceDetail.sizeOfstar}botes)</span>
                </div>
                <hr></hr>
                <div className="text">
                  <p>{serviceDetail.url}</p>
                </div>
                <p>서비스 바로가기▼</p>
                <div className="btn-wrap">
                  <span onClick={mobileBtnHandler}>모바일</span>
                  <span onClick={pcBtnHandler}>PC</span>
                </div>
              </div>
            </div>
          </Subject>
        </ContentTop>
        <ContentMiddle>
          <div className="content-header">
            <span className="active">서비스 소개</span>
            <span>코멘트 보기</span>
            <span>QNA</span>
          </div>
          <div className="content-middle">
            <ImageSlider className="slider">
              <div className="img-wrap" id="service_img_list">
                {serviceDetail.webfile?.map((contact, i) => {
                  return (
                    <img src={"http://49.50.173.236:8080/getWebImage/" +  contact.file_name} onClick={(e) => e.target.requestFullscreen()}/>
                    );
                  })}
              </div>
              <span className="pre-img-btn" onClick={(e) => preImageHandler(e)}>〈</span>
              <span className="next-img-btn" onClick={(e) => nextImageHandler(e)}>〉</span>
            </ImageSlider>
          </div>
          <div className="container">
            <div>
              <p>{serviceDetail.content}</p>
            </div>
          </div>
        </ContentMiddle>
        <ContentBottom>
          {userId &&
            <div className="header modify" id="replyContent">
              <h5>내 평점 남기기</h5>
              <span>
                <span onClick={startClickHandler} id="star_wrap">
                  <span data-idx="1"></span>
                  <span data-idx="2"></span>
                  <span data-idx="3"></span>
                  <span data-idx="4"></span>
                  <span data-idx="5"></span>
                </span>
                <form onSubmit={addReview}>
                  <input type="text" id="reply_text" placeholder="한줄평을 남겨보세요!"/>
                  <button type="submit">작성</button>
                </form>
              </span>
            </div>
          }
          <ReplyList>
            <div className="title">
              <h4>한줄평 <span className="gray-font">( {reply?.length} comment )</span></h4>
            </div>
            <ul id="reply_wrap">
              {reply?.map((v, i) => {
                return (
                  <li data-id={v.id} className={v.id !== v.parent ? "re-reply" : ""}>
                    <div>
                      <span className="user-name">{v.user.name}</span>
                      {v.user.userid == userId &&
                        <span className="fr">
                          <span onClick={(e) => replyModify(e, v.id)}>수정</span>
                          <span> / </span>
                          <span onClick={(e) => replyDelete(e, v.id)}>삭제</span>
                          <span> / </span>
                          <span onClick={(e) => reReply(e, v.id)}>댓글</span>
                        </span>
                      }
                    </div>
                    <div className="content">
                      <p>{v.content}</p>
                    </div>
                    <br></br>
                    <div>
                      <span className="star-wrap">
                        <strong>별점 {v.star || 0}</strong>
                        {[0,1,2,3,4].map((value) => {
                          let idx = value + 1;
                          if(v.star > value ) return <span data-idx={idx} className="active" onClick={startClickHandler}></span>;
                          else return <span data-idx={idx} onClick={startClickHandler}></span>;
                        })}

                      </span>
                      <span className="date fr">{v.createdAt.substr(0, 10)}</span>
                    </div>
                  </li>
                  );
                })
              }
            </ul>
            
          </ReplyList>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={AllReply?.webreply?.length || 0}
            pageRangeDisplayed={5}
            onChange={handlePageChange.bind(this)}
          />
        </ContentBottom>
      </Container>
      <Footer>
        {/* <div>
          <h4>비슷한 추천 서비스</h4>
          <ImageSlider className="slider">
              <div className="img-wrap" id="recommend_service">
                <img src="/image/img_3.png"/>
                <img src="/image/img_2.png"/>
                <img src="/image/img_1.png"/>
                <img src="/image/img_3.png"/>
                <img src="/image/img_2.png"/>
                <img src="/image/img_1.png"/>
                <img src="/image/img_2.png"/>
                <img src="/image/img_2.png"/>
              </div>>
          </ImageSlider>
          <span className="next-img-btn" onClick={(e) => nextImageHandler(e)}>〈</span>
        </div> */}
      </Footer>
    </Contents>
  );
}

const Contents = styled.section`
  padding-top:75px;
  background: #F3F3F3;
  
  .fr {
    float: right;
  }
`
const Container = styled.div`
  width: 900px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-flow: column;
`

const ContentHeader = styled.div`
  padding: 41px 0 10px 0;
  .title  {
    font: Bold 24px/36px Noto Sans CJK KR;
  }
  .back-btn {
    float: right;
    font: Bold 22px/33px Noto Sans CJK KR;
  }
`

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const Subject = styled.div`
  width: 100%;
  height: 232px;
  padding: 50px 26px 18px 31px;
  background: #FFFFFF;
  display: flex;
  flex-flow: column;
  position: relative;


  .content-header>h3 {
    float: left;
    margin-right: 5px;
  }

  .content-header>span {
    color: #282828;
  }

  .state {
    font-size: 11px;
    color: #282828;
    display: flex;
  }
  .state>span {
    line-height: 19px;
  }

  .subject-header-title {
    font-size: 13px;
    font-weight: bold;
    float: left;
    height 33px;
    width: 100%;
    padding: 7px 22px;
    background: #ccc;
    position: absolute;
    top: 0;
    left: 0;
  }

  .subject-header-btn-wrap {
    float: right;  
  }
  
  .subject-header-btn-wrap>* {
    margin-left: 8px;
  }

  .content-wrap {
    display: flex;
  }


  .image-wrap {
    flex: 0 0 167px;
    width: 167px;
    height: 167px;
    overflow: hidden;
    border: 1px solid #E9E9E9;
  }

  .image-wrap>img {
    max-width: 167px;
    max-height: 167px;
  }

  .container {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-flow: column;
  }

  .user {
    font-size: 11px;
    color: #282828;
  }

  .user>span {
    margin-right: 8px;
  }

  .small-img {
    width: 22px;
    height: 22px;
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
  
  .container>hr {
    border: .5px solid #E6E6E6;
    margin: 10px 0 8px 0;
  }


  .container>p {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .text {
    height: 100%;
    font-size: 12px;
    color: #282828;
  }

  .btn-wrap>span {
    display: inline-block;
    width: 130px;
    height: 26px;
    line-height: 26px;
    text-align center;
    border: 1px solid #D1D1D1;
    font-size: 12px;
    font-weight: bold;
    background: #484848;
    color: #fff;
    margin-right: 6px;
    pointer: cursor;
  }
`

const Profile = styled.div`
  width: 213px;
  height: 232px;
  background: #FFFFFF;
  display: inline-block;
  display: flex;
  flex-flow: column;

  .profile-header-title {
    font-size: 14px;
    font-weight: bold;
    float: left;
  }

  .profile-header-img {
    float: right;  
  }
  
  .profile-content {
    padding: 14px 17px 0 21px;
  }

  .container {
    text-align: center;
    position: relative;
    height: 100%;
    width: 100%;

  }
  
  .container>div {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .profile-show-btn {
    flex: 0 0 27px;
    text-align: center;
    background: #E6E6E6;
    font-weight: bold;
    font-size: 10px;
    line-height: 27px;
    color: #282828;
  }

  .intro{
    text-align: center;
    font-size: 10px;
    color: #171717;
    white-space: nowrap;
  }

  .container>div>hr {
    border: .5px solid #E6E6E6;
    margin: 7px 0 8px 0;
  }

  .state {
    font-size: 8px;
    white-space: nowrap;
  }

  .cyan-font {
    color: #06C4B0;
  }
`

const ContentMiddle = styled.div`
  margin-top: 18px;
  width: 100;
  background: #fff;
  display: flex;
  flex-flow: column;

  .content-header {
    flex: 0 0 60px;
    width: 100%;
    padding: 0 21px 0 0;
  }

  .content-header>span {
    width: 92px;
    height: 36px;
    display: inline-block;
    box-size: border-box;
    font-size: 14px;
    font-weight: bold;
    margin: 12px 0 12px 10px;
    text-align: center;
    line-height: 36px;
  }

  .content-header>span.active {
    background: #1AE1CC;
    border-radius: 14px;
  }

  .content-middle {
    flex: 0 0 260px;
    width: 100%;
  }

  .content-middle {
    padding: 21px 0 33px 0;
    white-space: nowrap;
    overflow: hidden;
  }

  .slider {
    height: 220px;
    padding: 0 30px;
  }
  
  .img-wrap>img:not(:last-child) {
    margin-right: 15px;
  }
  
  .container {
    height: 100%;
    padding: 12px 30px;
  }

  .container>h4 {
    margin-bottom: 18px;
  }

  .container>div {
    font-size: 13px;
    line-height: 22px;
    word-break: break-all;
  }

  .container-footer {
    display: flex;
    margin-top: 30px;
  }

  
  .container-footer>span {
    margin: 0 10px;
  }

  
  .container-footer>span>span {
    font-size: 10px;
    text-align: center;
    color: #171717;
    border: 1px solid #CFCFCF;
    border-radius: 8px;
    padding: 2px 10px;
  }

  .container-footer>span>span:not(:last-child) {
    margin-right: 5px;
  }

  .container-footer>p {
    font-size: 11px;
    color: #6E6E6E;
  }
  
  .container-footer>p>strong {
    font-size: 13px;
    color: #171717;

`
const ContentBottom = styled.div`
  margin-top: 30px;
  width: 100%;
  background: #fff;
  padding: 5px;
  border: 1px solid #eee;

  .header {
    padding: 18px 29px;
  }
  
  .header>span {
    display: flex;
    flex-flow: row;
    margin-top: 5px;
  }

  .header>span>span {
    flex: 150px 0 0;
  }

  .header>span>span>span {
    width: 25px;
    height: 26px;
    background-image: url("/image/iconmonstr-star-3-240.png");
    display: inline-block;
  }

  .header>span>span>span.active {
    
    background-image: url("/image/iconmonstr-star-4-240.png");
  }

  .header>span>form {
    width: 100%;
    display: flex;
  }

  .header>span>form>input {
    border: none;
    border-bottom: 1px solid #bababa;
    width: 100%;
  }
  
  .header>span>input::-webkit-input-placeholder {
    color: #bababa;
    font-weight: bold;
    text-align: center;
  }

  .header>span>form>button {
    padding: 6px 22px;
    border: 1px solid #CFCFCF;
    border-radius: 9px;
    background: #FFFFFF;
    margin-left: 20px;
    color: #8A8A8A;
  }

  .pagination {
    margin-left: calc(50% - 50px);
    
    li {
      float: left;
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
const ReplyList = styled.div`
  .title {
    margin: 0 0 9px 29px;
  }

  .gray-font {
    color: #8D8D8D;
    color: 10px;
    font-size: 10px;
    font-weight: nomal;
  }

  ul>li {
    display: flex;
    flex-flow: column;
    padding: 17px 29px;
    border-top: 1px solid #d1d1d1;
    font-size: 10px;
  }

  ul>li.re-reply {
    display: flex;
    flex-flow: column;
    padding: 17px 29px 17px 59px;
    border-top: 1px solid #d1d1d1;
    font-size: 10px;
  }

  .user-name {
    color: #090909;
    font-size: 11px;
  }

  .content {
    color: #202020;
    margin-top: 5px;
    font-size: 12px;
  }
  .content>input {
    width: 100%;
  }

  .date {
    color: #6E6E6E;
  }
  
  .star-wrap>strong {
    font-size: 12px;
    position: relative;
    top: -7px;
    margin-right: 5px;
  }

  .star-wrap>span {
    width: 25px;
    height: 26px;
    background-image: url("/image/iconmonstr-star-3-240.png");
    display: inline-block;
  }

  .star-wrap>span.active {
    background-image: url("/image/iconmonstr-star-4-240.png");
  }

  #re_reply {
    margin-top: 30px;
    width: 100%;
    background: #fff;
    padding: 5px;
    border-top: 1px solid #eee;
  }
  
  #re_reply>h5 {
    font-size: 10px;
  }

  #re_reply>span {
    display: flex;
    flex-flow: row;
    margin-top: 5px;
  }

  #re_reply>span>span {
    flex: 150px 0 0;
  }

  #re_reply>span>span>span {
    width: 25px;
    height: 26px;
    background-image: url("/image/iconmonstr-star-3-240.png");
    display: inline-block;
  }

  #re_reply>span>span>span.active {
    
    background-image: url("/image/iconmonstr-star-4-240.png");
  }

  #re_reply>span>form {
    width: 100%;
    display: flex;
  }

  #re_reply>span>form>input {
    border: none;
    border-bottom: 1px solid #bababa;
    width: 100%;
  }
  
  #re_reply>span>input::-webkit-input-placeholder {
    color: #bababa;
    font-weight: bold;
    text-align: center;
  }

  #re_reply>span>form>button {
    padding: 6px 22px;
    border: 1px solid #CFCFCF;
    border-radius: 9px;
    background: #FFFFFF;
    margin-left: 20px;
    color: #8A8A8A;
  }

  .pagination {
    margin-left: calc(50% - 50px);
    
    li {
      float: left;
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

const Footer = styled.div`
  margin-top: 50px;
  height: 180px;
  width: 100%;
  background: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 18px 0;

  div {
    width: 896px;
    display: inline-block;
    position: relative;
    text-align: left;
    margin-top:
  }

  .slider {
    margin-top: 13px;
  }

  .img-wrap {
    height: 99px;
    overflow: hidden;
  }

  .img-wrap>img {
    max-height: 99px;
  }

  
  .img-wrap>img:not(:last-child) {
    margin-right: 18px;
  }

  .next-img-btn {
    position: absolute;
    left: -80px;
    top: calc(50% + 10px);
    transform: translate(0, -50%);
    font-size: 40px;
    cursor: pointer;
  }
`

const ImageSlider = styled.div`
  white-space: nowrap;
  position: relative;

  .img-wrap {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .img-wrap>img {
    height: 100%;
  }

  .next-img-btn {
    position: absolute;
    right: 0px;
    top: calc(50% + 10px);
    transform: translate(0, -50%);
    font-size: 40px;
    cursor: pointer;
  }
  
  .pre-img-btn {
    position: absolute;
    left: 0px;
    top: calc(50% + 10px);
    transform: translate(0, -50%);
    font-size: 40px;
    cursor: pointer;
  }
`
