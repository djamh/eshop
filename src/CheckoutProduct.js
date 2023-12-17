import React from 'react'
import './css/CheckoutProduct.css'

function CheckoutProduct() {

  return (
    <div>
       
        <div className="checkoutProduct">
            <img src='https://www.thebrick.com/cdn/shop/products/artemchr_ac_04_1400x.jpg?v=1655395445' alt="" className='checkoutProduct_image'/>

            <div className="checkoutProduct_info">
                <div className='checkoutProductTitle'><p>Title</p></div>
                
                <p className='checkoutProduct_price'>
                <span className='checkoutPrice_dollars'>59</span>
                <span className='checkoutPrice_cents'>99</span>$
                </p>

                <div className="checkoutProduct_rating">
                   <p>⭐</p> 
                    
                </div>
                <button className='product_removeCartButton'>Remove from Basket</button>
                
            </div>
            
        </div>
        
           

    </div>
  )
}

export default CheckoutProduct