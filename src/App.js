import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  //DATA LAYER 
  const [{user}, dispatch] = useStateValue();
 
  //useEffect <-- STUDIARE!!!!
  //PIECE OF CODE WHICH RUN BASED ON GIVEN CONDITION

  useEffect(() =>{
      auth.onAuthStateChanged((authUser) => {
       console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //The user is logged in
        dispatch({
          type:"SET_USER",
          user : authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type:"SET_USER",
          user : null,
        });
      }
    });
    console.log(user);

  }, []);

  return (
    <Router>
          <div className="app">
            <Switch>
              <Route path="/checkout">
                <Header/>
                <Checkout/>
              </Route>
              <Route path="/login">
              <Login />
              </Route>
              { /* this is the defoult route */}
              <Route path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
    </div>
    </Router>

  );
}
export default App;
