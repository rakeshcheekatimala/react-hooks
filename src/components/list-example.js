import React, { useState } from "react";
import useList from "./hooks/useList";
import NameTag from "./name-tag";

const initialNames = [
  {
    firstName: "john",
    lastName: "johnson"
  },
  {
    firstName: "peter",
    lastName: "peterson"
  },
  {
    firstName: "abyss",
    lastName: "abyssson"
  }
];
const ListExample = () => {
  const items = useList(initialNames);
  const [editable, setEditable] = useState(false);

  function removeHandler(e) {
    items.removeItem(e.target.name);
  }

  function doubleClickHandler() {
    setEditable(true);
  }

  function onKeyPress(e, index) {
    if (e.keyCode === 13 || e.charCode === 13) {
      setEditable(false);
      items.updateItem(index, e.target.value);
    }
  }
  return (
    <div>
      <h2>Example for List</h2>
      <ul>
        <li>Describes how to use map for iterating the list of items</li>
        <li>How to Display the props</li>
        <li>How to makeuse of EventHandlers</li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {items.list.map((v, i) => {
          return (
            <NameTag
              key={i}
              firstName={v.firstName}
              lastName={v.lastName}
              onClick={removeHandler}
              editable={editable}
              name={v.firstName}
              onDoubleClick={doubleClickHandler}
              onKeyPress={onKeyPress}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListExample;
