import React, { useState } from "react";
import {
  Navbar,
  Content,
  ListExample,
  Age,
  GitHubProfile,
  Input,
  UserBackground
} from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import progressContext from "./components/contexts/progressContext";
import "./App.scss";

function App() {
  const [progressValue, setProgressValue] = useState(
    "Did you explore React 16v+ for learning?"
  );
  return (
    <BrowserRouter>
      {/* 
	  	To make your context availabe throughout the application
		We will pass the array of useState values so that anywhere in the application
		we can get the value of the context variable and set the value
	   */}
      <progressContext.Provider value={[progressValue, setProgressValue]}>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <div className="App-Content container">
            <Switch>
              <Route path="/list-example" component={ListExample} />
              <Route path="/usestate-example" component={Age} />
              <Route path="/useeffect-example" component={GitHubProfile} />
              <Route path="/reusable-example" component={Input} />
              <Route
                path="/usecontext-hook-example"
                component={UserBackground}
              />
              <Route path="/" exact component={Content} />
            </Switch>
          </div>
        </div>
      </progressContext.Provider>
    </BrowserRouter>
  );
}

export default App;
