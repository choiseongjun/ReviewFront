//action type
const  LIKE_TOGGLE = 'service/TOGGLE';

//action
export const likeToggle = ( id ) => ({ type:LIKE_TOGGLE});

//state 
const initalState = {
  list : [
    {
      id: 1,
      title:'안녕하세요',
      writer : '관리자',
      img : '',
      like : 100,
      active : false,
    }
  ]
}

//reducer

const serviceReducer = (state = initalState , action) => {
  switch(action.type){
    case LIKE_TOGGLE :
      return  state.map( list => 
        list.id === action.id ? { ...list,  active : !list.active } : list
       );
      default :
      return state;
  }
}

export default serviceReducer;