import React from "react";

function Filter(props) {
  return (
    <div>
      filter shown with a <input value={props.findName} onChange={props.searchName} />
    </div>
  );
}

export default Filter; 
