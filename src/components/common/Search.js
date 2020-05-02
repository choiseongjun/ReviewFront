import React ,{useState} from 'react'
import styled from "styled-components";


const category = [
    {
        value: 0,
        label : '모두검색'
    },
    {
        value: 1,
        label : '모두검색2'
    }
]
function Search() {
    return (
        <>
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
                <input type="text" placeholder="검색어를 넣어서 직접 서비스를 만나보세요!"/>
                <button type="button">검색</button>
            </div>
        </>
    )
}

export default Search

const SearchWrap = styled.section`

`
