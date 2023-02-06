import React from 'react'
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { getBasketTotal } from './reducer';


function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const value = getBasketTotal(basket);

  return (
    <div className='subtotal'>
        <p>
            Subtotal ({basket?.length} items): <small>$</small><strong>{value}</strong>
        </p>
        <small className='subtotal-gift'>
            <input type = 'checkbox'/>
                This order contains a gift

        </small>
        <button>
            Proceed to Checkout
        </button>
      
    </div>
  )
}

export default Subtotal

