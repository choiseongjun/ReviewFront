import React, {useCallback} from 'react';
import ServiceList from '../components/service/serviceList';
import { useSelector , useDispatch} from 'react-redux';
import { likeToggle } from "../modules/service";


export default function ServiceContainer(){
  const dispatch = useDispatch();
  const list = useSelector (state => state.service);
  const onClick = useCallback ( id => dispatch(likeToggle(id)) ,[dispatch]);
  return (
    <div>
      <ServiceList list={list} onClick={onClick}></ServiceList>
    </div>
  )
}