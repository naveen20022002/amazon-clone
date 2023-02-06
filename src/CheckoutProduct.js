import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct(id,  image, title, price, rating) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE-FROM-BASKET",
            id: id,
        })
    }
  return (
    <div className='Checkoutproduct'>
        <img className='checkoutproduct-img' src = {image} alt = ''/>
        <div className='checkoutproduct-info'>
            <p className='chproduct-title' >{title}</p>
            <p className='chproduct-price' >
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className='chproduct-rating'>
                {Array(rating).fill().map((_,i)=><p>⭐</p>)}
            </p>
            <button onClick={removeFromBasket} className='remove-button'>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
