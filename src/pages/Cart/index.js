import React from 'react'
import Layout from '../../components/Layout'
import "./Cart.scss";
import Assets from '../../assets';
import { ImCross } from "react-icons/im";

const Cart = () => {
  return (
    <Layout>
        <div className="cart">
            <div className="cart-section">
              <h1 className="cart-section__heading">Cart</h1>
              <div className="cart-section__lists">
                  <div className="cart-section__item">
                      <img src={Assets.Hotel3} alt="hotel 1" className="cart-section__item--img" />

                      <p className='cart-section__item--text'>The world</p>

                      <div className="cart-section__quantity">
                          <button className='cart-section__btn cart-section__quantity--plus'>+</button>
                          <span className="cart-section__quantity--value">1</span>
                          <button className="cart-section__btn cart-section__quantity--minus">-</button>
                      </div>

                      <p className="cart-section__item--price">$24.3/day</p>

                      <ImCross className="cart-section__item--close" />
                      
                  </div>
                  
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default Cart