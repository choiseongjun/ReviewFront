//action type
const  LIKE_TOGGLE = 'service/TOGGLE';

//action
export const likeToggle = ( id ) => ({ type:LIKE_TOGGLE ,id});

//state 
const initalState = [
    {
      id: 0,
      title:'안녕하세요',
      writer : '관리자',
      img : '',
      like : 100,
      active : false,
      view : 1000,
    },
    {
      id: 1,
      title:'안녕하세요',
      writer : '관리자2',
      img : '',
      like : '1000',
      active : false,
      view : 10000,
    }
]

//reducer

const serviceReducer = (state = initalState , action) => {
  switch(action.type){
    case LIKE_TOGGLE :
      return state.map( item => 
        item.id === action.id ? {...item , like : item.like - 1 } : {...item , like : item.like + 1} 
       );
      default :
      return state;
  }
}

export default serviceReducer;