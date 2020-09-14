import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
 const [{basket}, dispatch] = useStateValue();

 return (
  <div className="subtotal">
   <CurrencyFormat

     renderText={(value) =>(
       <>
       <p>
        Subtotal ({ShoppingBasket.length} items): <strong>{value} </strong>
       </p>
       <small className="subtotal__girft">
        <input type="checkbox"/> This order contains a giift
       </small>
       </>

     )}

     decimalScale={2}
     value={getBasketTotal(basket)}
     displayType={"text"}
     thousandSeparator={true}
     prefix={'$'}
   />

   <button>Proceed for checkout</button>
  </div>
 );
}

export default Subtotal;
