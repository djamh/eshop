import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText = {(value) =>(
            <>
                <p>
                Subtotal(0 items): 0$
                </p>
                <div className="subtotal_gift">
                    <input type='checkbox'></input>
                    <label for="giftCheckbox">This order contains a gift</label>
                </div>
                <button className='subtotal_orderButton'>Order Now</button>
            </>
        )}

        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        
        />
    </div>
  )
}

export default Subtotal