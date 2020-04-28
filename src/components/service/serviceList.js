import React from "react";

function ServiceInfo ({item ,onClick}){
    const {id , title, writer ,img , like , view ,active} = item;
    return (
        <li>
            <strong>{title}</strong>
            <div className="info">
                <span>{writer}</span>
                <button 
                type="button" 
                onClick= {() => onClick(id)} 
                style={{backgroundColor : active ? 'red' :'blue'}}
                >{like}Vote</button>
                <button type="button">{view}View</button>
            </div>
        </li>
    )
}
function ServiceList( {list , onClick}) {
    return (
        <div className="list-container">
            <ul>
                {
                    list.map((item ,indx) => <ServiceInfo onClick={onClick} key={indx} item={item}/>)
                }
            </ul>
        </div>
  );
}

export default ServiceList;
