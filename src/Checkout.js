import React from 'react'
import "./css/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'; // Import the hook

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();


  return (
    <div className='checkout'>
        <div className='checkout_top'>
            <img src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg?itok=zUbCf_wT" alt="" className="checkout_ad" />
        </div>
        <div className='checkout_bottom'>
            <div className="checkout_left">
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                 {/* Map over the basket items and render CheckoutProduct for each item */}
                 {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    </div>
  )
}

export default Checkout