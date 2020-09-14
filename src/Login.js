import React, {useState} from 'react';
import './login.css';
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';

function Login() {

 const history = useHistory();
  //tiene traccia di email e password
 const[email, setEmail] = useState('');
 const[password, setPassword] = useState(''); 

 const login = event => {
  event.preventDefault(); //No Refresh Page
  //LOGIN LOGIC
  auth.signInWithEmailAndPassword(email, password)
  .then((auth) =>{
   //REDIRECT HOMEPAGE
   history.push('/');

  })
  .catch(e => alert(e.message));
 };

 const register = event => {
  event.preventDefault(); //No Refresh Page
  //REGISTER LOGIC
  auth.createUserWithEmailAndPassword(email, password)
  .then(auth =>{
   // CREATE A USER AND LOGGED IN.. THEN REDIRECT TO HOMEPAGE
   if(auth) {
    history.push('/');
   }
  })

  .catch(error => alert(error.message));
 }

 return (
  <div className="login">
    <Link to="/">
     <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
    </Link>

    <div className="login__container">
     <h1>Sign in</h1>
     <form>
      <h5>E-mail</h5>
      <input value={email} onChange={event =>setEmail(event.target.value)} type="email"/>
      <h5>Password</h5>
      <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
      <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
     </form>
     <p>By signing-in you agree with Amazon's conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
     <button onClick={register} className="login__registerButton">Create your Amazon account</button>
    </div>
  </div>
 );
}

export default Login;
