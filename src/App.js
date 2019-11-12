import React, { useState } from "react";
import Plant from "./components/plant";
import GitHubProfile from "./components/github-profile";
import NameTag from "./components/name-tag";
import Age from "./components/age";
import useList from "./components/hooks/useList";

import "./App.scss";

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

function App() {
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
    <div className="App">
      <header>
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
        <br />
        <Age />
        <Plant />
        <GitHubProfile />
      </header>
      <hr />
    </div>
  );
}

export default App;
