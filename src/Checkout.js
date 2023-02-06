import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='top-image' src = 'amazonoriginal.jpg' alt ='' />
            <h3>Hello,{user?.email}</h3>
            <h2 className='checkout-title'>YOUR SHOPPING BASKET</h2>
            <div className='basket'>
            {basket.map(item=>(
              CheckoutProduct(
              item.id,
              item.image,
              item.title,
              item.price,
              item.rating)

                
            ))}
            </div>
             {/* id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} */}
        </div>
        <div className='checkout-right'>
           <Subtotal/>
        </div>
      
    </div>
  )
}

export default Checkout
