import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {

  const[{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText = {(value) =>(
            <>
                <p>
                Subtotal({basket.length} items): ${value}
                </p>
                <div className="subtotal_gift">
                    <input type='checkbox'></input>
                    <label for="giftCheckbox">This order contains a gift</label>
                </div>
                <button className='subtotal_orderButton'>Order Now</button>
            </>
        )}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        
        />
    </div>
  )
}

export default Subtotal