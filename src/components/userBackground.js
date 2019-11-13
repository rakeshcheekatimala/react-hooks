import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import progressContext from "./contexts/progressContext";

const UserBackground = () => {
  const [progressValue, setProgressValue] = useContext(progressContext);
  function changeContextHandle(e) {
    if (e.target.innerText === "Yes") {
      //useContext("Yes I have explored Reaction 16v+ ");
      setProgressValue("Yes i have explored React v16+ for learning");
    } else {
      setProgressValue("No i have not yet explored React v16+ for learning");
    }
  }
  return (
    <>
      <p>{progressValue}</p>
      <ButtonGroup className="Content-ContextAction btn-group-lg">
        <Button variant="primary" onClick={changeContextHandle}>
          Yes
        </Button>
        <Button variant="primary" onClick={changeContextHandle}>
          No
        </Button>
      </ButtonGroup>
    </>
  );
};

export default UserBackground;
