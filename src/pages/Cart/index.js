import React from 'react'
import Layout from '../../components/Layout'
import "./Cart.scss";
import { ImCross } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart} from "../../redux/features/cart/cartSlice"
import Button from '../../components/Button';

const Cart = () => {

  const cartLists = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showEmptyMessage = () => (
    <div className="empty-msg">
      <GiShoppingCart className="empty-msg__icon" />
      <h2 className="empty-msg__text">Your Cart is Currently Empty!</h2>
      <Button url="hotels" text="Return to Hotels" />
    </div>
  )

  return (
    <Layout>
      <div className="cart">
        <div className="cart-section">
          <h1 className="cart-section__heading">Cart</h1>
          <div className="cart-section__lists">
            {cartLists.length >= 1 ? cartLists.map((item) => (
              <div className="cart-section__item">
                <img src={require(`../../assets/img/${item.image}`)} alt={item.name} className="cart-section__item--img" />

                <p className='cart-section__item--text'>{item.name}</p>

                <div className="cart-section__quantity">
                  <button onClick={() => dispatch(increment(item.id))} className='cart-section__btn cart-section__quantity--plus'>+</button>
                  <span className="cart-section__quantity--value">{item.roomsBooked}</span>
                  <button 
                    onClick={() => dispatch(decrement(item.id))} 
                    className="cart-section__btn cart-section__quantity--minus"
                    disabled={item.roomsBooked <= 1 ? true : false}
                  >
                    -
                  </button>
                </div>

                <p className="cart-section__item--price">${item.price}/day</p>

                <ImCross onClick={() => dispatch(removeFromCart(item.id))} className="cart-section__item--close" />

              </div>
            )) : (
              showEmptyMessage()
            )}


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart