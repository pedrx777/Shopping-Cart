import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useState } from 'react';
import './CartButton.css'
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import {AiOutlineClose} from 'react-icons/ai'

function CartButton() {

  const [cart, setCart] = useState(false);

  const toggleIcon = () => {
    setCart((prevState) => !prevState);
  };

  const toggleCartAndIcon = () => {
    toggleIcon();
    setIsCartVisible(!isCartVisible);
  };

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return (
    <button 
      type="button" 
      className="cart__button"
      onClick={ toggleCartAndIcon } 
    >
      {cart ? (<AiOutlineClose />) : (
            <>
              <AiOutlineShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-status">{cartItems.length}</span>
              )}
            </>
          )}
    </button>
  );
}

export default CartButton;
