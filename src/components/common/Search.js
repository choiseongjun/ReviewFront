import React ,{useState} from 'react'
import styled from "styled-components";
import { initalizeWebList } from "../../modules/weblist";
import { useDispatch } from "react-redux";
function Search(props) {
    
    const number=props.number;
    const dispatch = useDispatch();

    const category = [
        {
            value: 0,
            label : '제목'
        }
    ]
    const [text , setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    function search(text){
      
      
      dispatch(initalizeWebList(number,"All",text));
      
    }
    const handleKeyPress = (e,text) => {
      if (e.key === "Enter") {
        search(text);
      }
    };
    return (
        <SearchWrap>
            <div className="inner">
                <h2>서비스</h2>
            <div className="select-wrap">
                <select name="" id="">
                {
                    category.map( (item,index) => 
                        <option key={index} value={item.value}>{item.label}</option>
                    )
                }
                </select>
            </div>
            <div className="input-wrap">
                <input type="text" onKeyPress={(e)=>handleKeyPress(e,text)} onChange={onChange} vlaue="text" placeholder="검색어를 넣어서 직접 서비스를 만나보세요!"/>
                <button type="button" onClick={() => search(text)}>검색</button>
            </div>
            </div>
        </SearchWrap>
    )
}

export default Search

const SearchWrap = styled.div`
padding-bottom:22px;
border-bottom:1px solid #D1D1D1;
.inner {
    display:flex;
    flex-wrap:wrap;
    max-width:1360px;
    margin:0 auto;
}
.select-wrap {
    position:relative;
    width:120px;
    height:36px;
    border:1px solid #D1D1D1;
    margin-left:10px;
    select {
      width:100%;
      height:100%;
      padding:0 30px 0 10px;
      border:none;
      font-weight: bold;
      border-radius: 0px; /* iOS 둥근모서리 제거 */
      -webkit-appearance: none; /* 네이티브 외형 감추기 */
      -moz-appearance: none;
      appearance: none;
      font-size:16px;
      color:#171717
      option {
        font-size:14px;
      }
    }
    &::after {
      position:absolute;
      right:8px;
      top:50%;
      display:block;
      content:"";
      border-top: 12px solid #b7b7b7;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      transform: translateY(-50%);

    }
  }
  .input-wrap {
    display:flex;
    width:100%;
    margin-top:14px;
    input {
      width:calc(100% - 56px);
      height:56px;
      padding:0 14px;
      border:1px solid #C9C9C9;
      color:#171717;
      &::placeholder {
        color:rgba(#171717 , .6);
      }
    }
    button {
      width:96px;
      height:56px;
      color:#fff;
      font-size:17px;
      line-height:56px;
      background-color:#1AE1CC;
      border:none;
    }
  }
`

