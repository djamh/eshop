import React from 'react'
import './css/CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,rating,image,price}) {

  const [state, dispatch] = useStateValue(); // Get dispatch from context

  const removeFromBasket = () => {
    // Remove item from basket...
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id, // Pass the id of the item to be removed
    });
};


  //Splitting price in 2 parts
  const priceParts = price.toFixed(2).split('.');

  return (
    <div>
       
        <div className="checkoutProduct">
            <img src={image} alt="" className='checkoutProduct_image'/>

            <div className="checkoutProduct_info">
                <div className='checkoutProductTitle'><p>{title}</p></div>
                
                <p className='checkoutProduct_price'>
                <span className='checkoutPrice_dollars'>{priceParts[0]}</span>
                <span className='checkoutPrice_cents'>{priceParts[1]}</span>$
                </p>

                <div className="checkoutProduct_rating">
                   {/* Ensure rating is defined and is a number */}
                   {rating && !isNaN(rating) && Array(rating)
                        .fill()
                        .map((_, i) => (<p key={i}>⭐</p>))}
                    
                </div>
                <button onClick={removeFromBasket}className='product_removeCartButton'>Remove from Basket</button>
                
            </div>
            
        </div>
        
           

    </div>
  )
}

export default CheckoutProduct