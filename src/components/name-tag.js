import React from "react";

const boxStyle = {
  color: "red",
  fontSize: "1rem",
  border: "1px solid #1d252d",
  padding: "1rem",
  marginBottom: "0.5rem",
  width: "300px"
};

// we will use fragment to wrap the children as whole unit
// use can fragement tag or <> </>
const NameTag = props => {
  if (!props.firstName && !props.lastName) {
    return <h3>Invalid Name</h3>;
  }
  return (
    <div style={boxStyle}>
      {props.editable ? (
        <input
          type="text"
          defaultValue={props.firstName}
          onKeyPress={e => props.onKeyPress(e, props.index)}
        />
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>{props.firstName}</h3>
      )}
      <h3>{props.lastName}</h3>
      <button onClick={props.onClick} name={props.firstName}>
        Remove
      </button>
    </div>
  );
};

export default NameTag;
