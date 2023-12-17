import React from 'react'
import "./css/Product.css"
import { useStateValue } from './StateProvider';

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"></link>


function Product({id,title,rating,image,price}) {
    const [state, dispatch] = useStateValue(); // Get dispatch from context

    


    //Splitting price in 2 parts
    const priceParts = price.toFixed(2).split('.');


  return (
    <div>
        <div className="product">
            <img src={image} 
            alt="" className='product_image'/>
            <div className="product_info">
                <p>{title}</p>
                <div className="product_rating">
                    {/* Ensure rating is defined and is a number */}
                    {rating && !isNaN(rating) && Array(rating)
                        .fill()
                        .map((_, i) => (<p key={i}>⭐</p>))}
                </div>
                
                <p className='product_price'>
                <span className='price_dollars'>{priceParts[0]}</span>
                <span className='price_cents'>{priceParts[1]}</span>$
                    </p>
            </div>
            <button  className='product_addCartButton'>Add to Basket</button>
           
            
        </div>
    </div>
  )
}

export default Product