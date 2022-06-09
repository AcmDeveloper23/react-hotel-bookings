import React from 'react'
import Layout from '../../components/Layout'
import "./Cart.scss";
import Assets from '../../assets';
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {

  const cartLists = useSelector((state) => state.cart);

  return (
    <Layout>
      <div className="cart">
        <div className="cart-section">
          <h1 className="cart-section__heading">Cart</h1>
          <div className="cart-section__lists">
            {cartLists.length >= 1 && cartLists.map((item) => (
              <div className="cart-section__item">
                <img src={require(`../../assets/img/${item.image}`)} alt={item.name} className="cart-section__item--img" />

                <p className='cart-section__item--text'>{item.name}</p>

                <div className="cart-section__quantity">
                  <button className='cart-section__btn cart-section__quantity--plus'>+</button>
                  <span className="cart-section__quantity--value">{item.rooms}</span>
                  <button className="cart-section__btn cart-section__quantity--minus">-</button>
                </div>

                <p className="cart-section__item--price">${item.price}/day</p>

                <ImCross className="cart-section__item--close" />

              </div>
            ))}


          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart