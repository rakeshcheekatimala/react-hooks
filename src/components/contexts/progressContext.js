import { createContext } from "react";

/*
	createContext is used for creating the context variable that 
	can be shared to any component.
	If some component is willing to modify the context variable it can do,
	once updated it will reflect through out the application
*/
const progressContext = createContext(null); //initial value is set to null

export default progressContext;
