import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ServiceDetail(e) {
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    axios.get(`http://52.79.57.173/web/service/${e.match.params.id}`)
      .then(function (data) {
        setServiceDetail(data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);
  console.log(serviceDetail);
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
    alert("PC는 미구현입니다.");
  }

  function nextImageHandler(e) {
    console.log(e.target);
    let element = document.getElementById("recommend_service");
    let children = element.childNodes;
    let scrollLeft = element.scrollLeft;
    if(element.scrollWidth <= element.offsetWidth + scrollLeft) {
      element.scroll({top: 0, left: 0, behavior: 'smooth' });
    } else {
      children.forEach(function(v, i) {
        if(v.offsetLeft == scrollLeft) {
          element.scroll({top: 0, left: children[i+1].offsetLeft, behavior: 'smooth' });
          return false;
        }
      });
    }
  }

  return (
    <Contents>
      <Container>
        <ContentHeader>
          <span className="title">서비스 소개</span>
          <Link to="/service">
            <span className="back-btn">목록으로 〉</span>
          </Link>
        </ContentHeader>
        <ContentTop>
          <Subject>
            <div className="subject-header">
              <span className="subject-header-title">생산성 > 길찾기</span>
              <div className="subject-header-btn-wrap">
                <img className="subejct-header-share" src="/image/iconmonstr-share-8-240.png" onClick={shareBtnHandler}/>
                <img className="subejct-header-bell" src="/image/bell.png" onClick={bellBtnHandler}/>
              </div>
            </div>
            <div className="content-wrap">
              <div className="image-wrap">
                <img src="/image/121111.png"></img>
              </div>
              <div className="container">
                <h3>{serviceDetail.title}</h3>
                {/* <div>{serviceDetail.user.name}</div> */}
                <div className="user">
                  <span>
                    <img src="/image/heart.png" class="small-img"></img>
                    <span>해바라기</span>
                  </span>
                  <span>
                    <img src="/image/iconmonstr-star-3-240.png" class="small-img"></img>
                    <span>별점 0개</span>
                  </span>
                </div>
                <hr></hr>
                <div className="text">
                  <p>{serviceDetail.content}</p>
                </div>
                <div className="btn-wrap">
                  <span onClick={mobileBtnHandler}>모바일</span>
                  <span onClick={pcBtnHandler}>PC</span>
                </div>
              </div>
            </div>
          </Subject>
          <Profile>
            <div class="profile-content">
              <div className="profile-header">
                <span className="profile-header-title">메이커</span>
                <img className="profile-header-img" src="/image/iconmonstr-user-8-240.png"></img>
              </div>
            </div>
            <div class="container">
              <div>
                <img src="/image/heart@2x.png"></img>
                <h5>해바라기님</h5>
                <p className="intro">안녕하세요 해바라기입니다!<br/>저의 서비스를 보러 와보세요!</p>
                <hr/>
                <p className="state"><span className="cyan-font">받은 별 개수</span> 2314개 <span className="cyan-font">팔로우</span> 2210명</p>
              </div>
            </div>
            <div class="profile-show-btn">
              <p>프로필 보러가기</p>
            </div>
          </Profile>
        </ContentTop>
        <ContentMiddle>
          <div className="content-header">
            <span className="active">서비스 소개</span>
            <span>코멘트 보기</span>
            <span>QNA</span>
          </div>
          <div className="content-middle">
            <ImageSlider className="slider">
              <div className="img-wrap">
                <img src="/image/img_3.png"/>
                <img src="/image/img_2.png"/>
                <img src="/image/img_1.png"/>
                <img src="/image/img_3.png"/>
                <img src="/image/img_2.png"/>
              </div>
            </ImageSlider>
            <div className="slider-btn-wrap">
              <span className="active"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="container">
            <h4>실속있는 여행의 시작 해바라기 여행</h4>
            <div>
              <p>해바라기 여행은 여행만 바라보고 무슨 서비스무슨 서비스입니다.</p>
              <p>그래서 이런 서비스들을 한 번 이용해 보세요! 해바라기 여행 좋은 서비스 좋습니다!해바라기 여행은 여행만 바라보고 무슨 서비스무슨 서비스입니다. 그래서 이런 서비스들을 한 번 이용해 해바라기 여행 좋은 서비스 좋습니다!해바라기 여행은 여행만 바라보고 무슨 서비스무슨 서비스입니다. 그래서 이런 서비스들을 한 번 이용해 여행은 여행만 바라보고 무슨 서비스무슨 서비스입니다. 그래서 이런 서비스들을 한 번 이용해보세요! 해바라기 여행 좋은 서비스 좋습니다!
              </p>
              <br/>
              <p>
               해바라기 여행은 여행만 바라보고 무슨 서비스무슨 서비스입니다. 그래서 이런 서비스들을 한 번 이용해 보세요! 해바라기 여행 좋은 서비스 좋습니다!해바라기 여행은 여행만 바라보고 무슨 서비스무슨 서비스입니다. 그래서 이런 서비스들을 한 번 이용해보세요! 해바라기 여행 좋은 서비스 좋습니다!
              </p>
            </div>
            <div className="container-footer">
              <strong>해시태그</strong>
              <span>
                <span>하이라이트</span>
                <span>형광펜</span>
                <span>공부할때</span>
                <span>일상</span>
                <span>디자인</span>
              </span>
              <p><strong>버전</strong> 0.8ver 마지막 수정일 {(serviceDetail.updatedAt ?? "").substring(0, 10)}</p>
            </div>
          </div>
        </ContentMiddle>
        {/* <ContentBottom>
        </ContentBottom> */}
      </Container>
      <Footer>
        <div>
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
        </div>
      </Footer>
    </Contents>
  );
}

const Contents = styled.section`
  padding-top:75px;
  background: #F3F3F3;
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
  width: 657px;
  height: 232px;
  padding: 14px 26px 18px 31px;
  background: #FFFFFF;
  display: flex;
  flex-flow: column;

  .subject-header-title {
    font-size: 13px;
    font-weight: bold;
    float: left;
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

  .text {
    height: 100%;
    font-size: 12px;
    color: #282828;
  }

  .btn-wrap {
    text-align: right;
  }

  .btn-wrap>span {
    display: inline-block;
    width: 88px;
    height: 28px;
    line-height: 28px;
    text-align center;
    border: 1px solid #D1D1D1;
    border-radius: 11px;
    font-size: 12px;
    font-weight: bold;
    color: #282828;
    margin-left: 6px;
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
    background: #E6E6E6;
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
    padding-left: 30px;
  }
  
  .img-wrap>img:not(:last-child) {
    margin-right: 15px;
  }

  .slider-btn-wrap {
    width: 100%;
    height: 19px;
    background: #fff;
    text-align: center;
  }

  .slider-btn-wrap>span {
    width: 8px;
    height: 8px;
    display: inline-block;
    background: #D1D1D1;
    border-radius: 50%;
    margin: 0 3px;
    cursor: pointer;
  }

  .slider-btn-wrap>span.active {
    width: 22px;
    background: #1AE1CC;
    border-radius: 5px;
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
  height: 700px;
  width: 100%;
  background: #fff;
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
  overflow: hidden;
`


// const [SERVICE_DETAIL, SERVICE_DETAIL_SUCCESS, SERVICE_DETAIL_FAILURE] = createRequestActionTypes("web/Service/52");

// export const serviceDetail = createAction(SERVICE_DETAIL)


// const serviceDetailSaga = createRequestSaga(SERVICE_DETAIL, serviceDetailApi.serviceDetail);
// // export const testing = createAction(SERVICE_DETAIL)
// // const testSaga = createRequestSaga(TEST, authAPI.testSaga)

// export function* serviceDetailSagaLatest() {
//   yield takeLatest(SERVICE_DETAIL, serviceDetailSaga);
// }

// const weblistsaga = createRequestSaga(SERVICE_DETAIL, serviceDetail);

// export function* weblistSaga() {
//   yield takeLatest(WEBLIST, weblistsaga);
// }

// const initialState = {
//   weblist: null,
//   weblistError: "",
// };
// const ServiceDetail = (state = initialState, action) => {
//     let { id } = useParams();

//     switch (action.type) {
//       case SERVICE_DETAIL_SUCCESS:
//         console.log("suc", state, action);
//         return {
//           ...state,
//           weblist: action.payload,
//         };
//       default:
//         return state;
//     }
//     console.log(SERVICE_DETAIL)
//     return (
//         <Contents>{id}</Contents>   
//     );
// }

// export default ServiceDetail;
