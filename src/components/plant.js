import React, { useState, useEffect } from "react";
let isBorn = false;

const Plant = () => {
  const [growth, setGrowth] = useState(0); // initial Growth of Seed is 0;
  const [completelyGrown, setCompletelyGrown] = useState(false);
  /* 
  	This is similar to componentDid mount
	this will run only once in the component lifecycle.
	this useEffect((),{},[]) signature is lifecycle hook similar to componentDidMount
  */

  useEffect(() => {
    console.log("will print once component mount is done");
  }, []);

  useEffect(() => {
    if (isBorn) {
      console.log("on click to grow btn is clicked");
      console.log("I am growing phase");
    } else {
      isBorn = true;
    }
    if (growth > 70) {
      setCompletelyGrown(true);
    }
  });

  /*
   This hook runs only when completelyGrown is updated
   which is growth>70 
  */

  useEffect(() => {
    if (isBorn) {
      console.log("seed has completely grown");
      document.title = "Seed has grown and became a Full True";
    }
  }, [completelyGrown]);

  function growTreeHandler() {
    setGrowth(growth + 10); // set the growth of seed by 10 years
  }

  return (
    <>
      <h1>Plant a seed</h1>
      <p>Initial Growth of Seed is {growth} years</p>
      {completelyGrown && <h2>Seed has completely grown and became a tree</h2>}
      <button onClick={growTreeHandler}>Click to Grow</button>
    </>
  );
};

export default Plant;
