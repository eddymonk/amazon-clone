import React from 'react';
import Product from './Product';
import "./Home.css";


function Home() {
 return (
  <div className="home">
    <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />

    <div className="home__row">
    <Product  
      id="12345"
      title="The lean startup: How constant innovation creates Startups"
      price={11.99}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    />
    <Product  
      id="1234"
      title="Blink Mini - Security Camera 1080p - Slow Motion"
      price={31.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/410ZCTWeqzL._SY300_.jpg"
    />
    </div>

  <div className="home__row">
      <Product  
        id="123"
        title="Swiffer Wet - Remove the dust and help you to clean the hoouse - 48 pieces"
        price={8.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81a0%2B9uqGVL._AC_SL1500_.jpg"
      />

      <Product  
        id="12"
        title="Matress with air inside perfect for Camping"
        price={14.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/616R7o5sKLL._AC_SL1500_.jpg"
      />

      <Product  
        id="1"
        title="Pillow the will make you sleep like a baby"
        price={40.30}
        rating={2}
        image="https://images-na.ssl-images-amazon.com/images/I/61MDsViIUbL._AC_SL1500_.jpg"
      />
    </div>
    <div className="home__row">
      <Product  
       id="123458"
        title="The lean startup: How constant innovation creates Startups"
         price={11.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />
</div>
    </div>


 );
}

export default Home;
