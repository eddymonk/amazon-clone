// setup data layer 
// we need this to track the basket 

import React, { createContext, useContext, useReducer } from 'react';


// this is the data layer
export const StateContext = createContext();


//build provider 
export const StateProvider = ({reducer, initialState, children}) => (
 
 <StateContext.Provider value={useReducer (reducer, initialState)}>   {children} {/* this children is referring to index.js -> <App /> */}
 </StateContext.Provider>

);
// This is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext);