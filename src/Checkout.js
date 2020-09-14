import React from 'react';
import { useStateValue } from './StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function CheckOut() {

 const [{basket}] = useStateValue();
 
 return <div className="checkout">
   <div className="checkout__left">

   <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

   {basket?.length === 0 ? (
     <div>
       <h2>Your shopping cart is Empty</h2>
       <p>You have no items in your basket. To buy one or add it to basket please visit our main page.</p>
     </div>
    ) : (
      <div>
        <h2 className="checkout__title" >Your shopping Basket</h2>
        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
       
        
      </div>
   )}
   </div>
   {
     basket.length > 0 && (
       <div className="checkout__right">
         <Subtotal/>
       </div>
     )
   }
  </div>
};

export default CheckOut;
