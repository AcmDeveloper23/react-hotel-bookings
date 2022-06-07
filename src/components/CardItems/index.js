import React from 'react'
import "./CardItems.scss";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/features/cart/cartSlice";
import { Link } from 'react-router-dom';
import { BsBookmark} from "react-icons/bs";

const CardItems = ({name, image, price, desc}) => {

    const dispatch = useDispatch();

    const incrementCart = () => {
        dispatch(increment());
    }

    /* const derementCart = () => {
        dispatch(decrement());
    } */

    return (
        <article className='card'>
            <img src={image} alt="Item 1" className='card__img' />

            {/* <div className="card__bookmark">
                <BsBookmark className="card__bookmark--icon" />
            </div> */}
            
            <div className='card__text-box'>
                <div className='card__title-box'>
                    <p className='card__name'>
                        {name}
                    </p>
                    <div className="card__bookmark">
                        <BsBookmark className="card__bookmark--icon" />
                    </div>
                </div>

                <p className='card__price'>${price}/day</p> 
                
                <p className='card__desc'>{desc}</p>
            </div>

            <div className='card__btn-box'>
                <button onClick={incrementCart} className='card__btn card__btn--cart'>Add to cart</button>
                <Link to={`/details/1`}  className='card__btn card__btn--details'>View Details</Link>
            </div>

            <center>
                    
            </center>
        </article>
    )
}

export default CardItems