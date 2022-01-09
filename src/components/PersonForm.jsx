import React from "react";



function PersonForm(props) {
  
  
  return (
    <div>
      <form onSubmit={props.addName}>
        <div>
          name:{" "}
          <input
            value={props.newName}
            onChange={props.handleAddName}
            type="text"
            placeholder="type name..."
          />
        </div>
        <div>
          number:{" "}
          <input
            value={props.newNumber}
            onChange={props.handleAddNumber}
            type="tel"
            placeholder="type number..."
            pattern="[0-9]{10}"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
