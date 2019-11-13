import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
const Age = () => {
  const [age, setAge] = useState(21);
  const ageUpHandler = () => {
    setAge(age + 1);
  };
  const ageDownHandler = () => {
    setAge(age - 1);
  };
  return (
    <div className="text-center">
      <h2>{age}</h2>
      <ButtonGroup>
        <Button onClick={ageUpHandler} style={{ marginRight: "1rem" }}>
          Age Up{" "}
        </Button>
        <Button onClick={ageDownHandler}>Age Down</Button>
      </ButtonGroup>
    </div>
  );
};

export default Age;

/* 
	predefined hooks starts with use prefix 
	useState hook returns getter method and settermethod in the array for the input value
	Don't call use hooks on loops
	Don't call use on conditional statements, nested functions
	Declaration of hooks should be at the top after the function component starts
	Only call hooks from react functions
*/
