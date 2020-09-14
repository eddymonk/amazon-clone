import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from '@material-ui/core';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';


function Header() {
  const [{basket, user}] = useStateValue();

  console.log(basket);

  // IF THEY ARE SIGN IN, SIGN THEM OUT
  const login = () => {
    if(user) {
      auth.signOut();
    }
  };

 return ( 
  <nav className = "header" >

    <Link to="/">

    <img className = "header__logo"
    src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="img"></img>

    </Link>
    <div className="header__search">
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
    </div>

    {/* 3 links */}

    <div className="header__nav">

      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__options">
          <span className="header__optionsLineOne" >Hello, {user?.email}</span>
 <span className="header__optionsLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
      </Link>

      <Link to="/" className="header__link">
        <div className="header__options">
          <span className="header__optionsLineOne">Returns</span>
          <span className="header__optionsLineTwo">& Orders</span>
        </div>
      </Link>

      <Link to="/" className="header__link">
        <div className="header__options">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>
      </Link>

      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon  />
            <span className="header__optionsLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>

    </div> 
  </nav>

 );

}

export default Header;
