import React from "react";

function Service (){
    
}
function ServiceList( {list , onClick}) {
  return (
    <div className="list-container">
        <ul>
            {
                list.map(item => <li>{item.title }</li>)
            }
        </ul>
    </div>
  );
}

export default ServiceList;
