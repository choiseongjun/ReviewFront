import React from 'react';
import ServiceList from '../components/service/serviceList';
import { useSelector , useDispatch} from 'react-redux';
import { likeToggle } from "../modules/service";


export default function ServiceContainer(){
  const dispatch = useDispatch();
  const list = useSelector (state => state.service.list);
  const onClick = (id) => {
    dispatch( likeToggle(id));
  }
  return (
    <div>
      <ServiceList list={list} onClick={onClick}></ServiceList>
    </div>
  )
}